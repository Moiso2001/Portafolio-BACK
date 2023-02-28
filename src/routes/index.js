const { Router } = require('express');

const about = require('./about');
const experience = require('./experience');
const work = require('./work');
const link = require('./links')

const array = require('../controllers/response');
const response = require('../controllers/response');

const router = Router();

router.use('/about', about);
router.use('/experience', experience);
router.use('/work', work);
router.use('/links', link);

router.get('/', (req, res) => {
    res.status(200).send([]);
});

router.get('/all', (req,res) => {
    res.send(response)
})

router.get('*', (req,res) => {
    res.send([{msg: "Please type an available route",
        "0": '/work',
        "1": '/links',
        "2": "/experience",
        "3": "/about/me",
        "4": "/about/love",
        "5": "/about/abilities",
        "6": "/about/aspirations"
    }])
})

module.exports = router;