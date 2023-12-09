const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User list')
})

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "poop" })
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error");
        res.render('users/new', { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send('hi')
})

// get/put/delete requests for route /:id
router
    .route('/:id')
    .get((req, res) => { //what you name the param after : in '/:XXX' is the name in req.params.XXX
        console.log(req.user);
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => { 
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => { 
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{ name: "Kyle" }, { name: "Sally" }]
// middleware    
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router