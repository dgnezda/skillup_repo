import users from "../model/users.json" assert { type: "json"};
import bcrypt from "bcrypt";

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
        // create JWT
        res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}