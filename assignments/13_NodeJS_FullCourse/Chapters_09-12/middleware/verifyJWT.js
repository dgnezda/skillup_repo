import jwt, { decode } from "jsonwebtoken"; // CommonJS: const jwt = require("jsonwebtoken");
const { sign, verify } = jwt;
import dotenv from 'dotenv'; // CommonJS: require('dotenv').config();
dotenv.config();

export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization; // Just in case it's defined with an uppercase A on the front-end
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); // 403 forbidden, (invalid token)
            req.user = decoded.UserInfo.username; // TypeError: Cannot read properties of undefined (reading 'username') ??
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}