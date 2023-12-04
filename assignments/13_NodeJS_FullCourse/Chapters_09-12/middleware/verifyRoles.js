export const verifyRoles = (...allowedRoles) => { // the ... in function parameters means take as many params as needed, and save them into 'allowed roles'.
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401); // on optional chaining: if there isn't a valid req, send err, then, even if it is valid, but id doesn't have the .roles property, return an error.
        const rolesArray = [...allowedRoles]; // unpack the passed in arguments into array
        console.log(rolesArray); // passed into the function verifyRoles
        console.log(req.roles); // come from the JWT
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true); // the chained .find checks each val in the newly mapped array, to see if any of the values is true. If it finds any true val, then all is good, else not.
        if (!result) return res.sendStatus(401);
        next();
    }
}