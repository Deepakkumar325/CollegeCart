const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = `${process.env.REACT_APP_JWT_SECRET}`;

//Route 1: Create a User using: POST "api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        
        // Check for same email existance
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //Create User
        user = new User({
            name: req.body.name,
            college: req.body.college,
            email: req.body.email,
            password: secPass
        })
        await user.save();

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)

        success = true
        res.json({ user, success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error")
    }

});

// Route 2: Authenticate a user using: POST "api/auth/login". No login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {

    let success = false

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        let user = await  User.findOne({ email })
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(data,JWT_SECRET)
        success = true
        res.json({ user, success, authtoken })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server error")
    }

});

//Route 3: Get loggedin User Details using POST: /api/auth/getuser. login required
router.post('/getuser', fetchuser, async (req, res) => {

    try {
        let userId = req.user.id
        const user = await User.findById(userId).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
});

module.exports = router