import users from "../model/users.json" assert { type: "json"};
import * as path from "path";
import bcrypt from "bcrypt";
import * as fsPromises from "node:fs/promises"; 

const __dirname = import.meta.dirname;

const usersDB = {
    users: users,
    setUsers: function (data) { this.users = data }
}

export const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password required'});
    // Check for duplicate usernames in the db
    const duplicate = usersDB.users.find(person => person.username == user);
    if (duplicate) return res.sendStatus(409); // Conflict
    try {
        // encrypt password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        // store the new user
        const newUser = { "username": user, "password": hashedPwd };
        usersDB.setUsers([...usersDB.users, newUser]);
        // write to json
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created.`});
    } catch (err) {
        res.status(500).json({ 'message': err.nessage }); // Server error
    }
}