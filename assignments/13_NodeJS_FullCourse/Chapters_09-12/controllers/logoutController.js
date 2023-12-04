import users from "../model/users.json" assert { type: "json"};
import * as fsPromises from "node:fs/promises"; 
import * as path from "path";

const __dirname = import.meta.dirname;

const usersDB = {
    users: users,
    setUsers: function (data) { this.users = data }
}

export const handleLogout = async (req, res) => {
    // On client, also delete the accessToken (msg for FrontEnd! accessToken cannot be deleted on the back-end)
    
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // Success, No content
    const refreshToken = cookies.jwt;

    // refreshToken in DB?
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true, });
        return res.sendStatus(204);
    }
    
    // Delete the refreshToken in DB
    const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = {...foundUser, refreshToken: ''}; // replace refresh token with empty string ==> delete it!
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // in production, also use "secure: true" / this is for dev server, https needs the secure:true option
    res.sendStatus(204);
}