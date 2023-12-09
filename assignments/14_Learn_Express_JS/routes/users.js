const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    res.send('User list')
})

router.get('/new', (req, res) => {
    res.send('User new form')
})

router.post('/', (req, res) => {
    res.send('Create user')
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