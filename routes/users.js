const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    // res.send("User New Form")
    res.render("users/new", { firstName: "Test" })
})

router.post('/', (req, res) => {
    // res.send('Create user')
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }
    // console.log(req.body.firstName)
    // res.send('Hi')
})

router.route("/:id").get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID: ${req.params.id}`)
})
    .put((req, res) => {
        res.send(`Update user with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID: ${req.params.id}`)
    })

const users = [{ name: 'Kyle' }, { name: 'Sally' }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router