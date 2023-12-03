import users from "../model/users.json";
import * as path from "path";
import * as fs from "fs";
import bcrypt from "bcrypt";
import * as fsPromises from "node:fs/promises"; 

const usersDB = {
    users: users,
    setUsers: function (data) { this.users = data }
}

