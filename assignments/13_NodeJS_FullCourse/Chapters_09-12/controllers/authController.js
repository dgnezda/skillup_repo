import users from "../model/users.json" assert { type: "json"};
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // CommonJS: const jwt = require("jsonwebtoken");
const { sign, verify } = jwt;
import dotenv from 'dotenv'; // CommonJS: require('dotenv').config();
dotenv.config();
import * as fsPromises from "node:fs/promises";
import * as path from "path";

const __dirname = import.meta.dirname;

const usersDB = {
    users: users,
    setUsers: function (data) { this.users = data }
}

export const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password required'});
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // Unauthorized
    // evaluate pwd
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        // create JWTs
        const accessToken = sign(
            {"username": foundUser.username},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' } // 5-15min for production
        );
        const refreshToken = sign(
            {"username": foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' } // 5-15min for production
        );
        // Saving refreshToken with current user
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = {...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken }); // store in memory, NOT in local storage or Cookie!
    } else {
        res.sendStatus(401);
    }
}