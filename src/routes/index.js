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
    res.send(array)
})

router.get('*', (req,res) => {
    res.send([{msg: "Please type an available route",
        "0": '/work',
        "1": '/links',
        "2": "/experience",
        "3": "/me",
        "4": "/love",
        "5": "/abilities",
        "6": "/aspirations"
    }])
})

module.exports = router;