import jwt from "jsonwebtoken"; // CommonJS: const jwt = require("jsonwebtoken");
const { sign, verify } = jwt;
import dotenv from 'dotenv'; // CommonJS: require('dotenv').config();
dotenv.config();

export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader); // Bearer token
    const token = authHeader.split(' ')[1];
    verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); // 403 forbidden, (invalid token)
            req.user = decoded.usetname;
            next();
        }
    )
}