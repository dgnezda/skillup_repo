import users from "../model/users.json" assert { type: "json"};
import jwt from "jsonwebtoken"; // CommonJS: const jwt = require("jsonwebtoken");
const { sign, verify } = jwt;
import dotenv from 'dotenv'; // CommonJS: require('dotenv').config();
dotenv.config();

const usersDB = {
    users: users,
    setUsers: function (data) { this.users = data }
}

export const handleRefreshToken = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) return res.sendStatus(403); // Forbidden
    // evaluate jwt
    
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                { 
                    "UserInfo": { 
                        "username": decoded.username,
                        "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' } // longer for produciton
            );
            res.json({ accessToken })
        }
    );
}