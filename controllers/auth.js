const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('does the auth route work?')
})

module.exports = router