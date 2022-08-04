const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz')

/* GET home page. */
router.get('/', (req, res) => {
    const show = !req.session.vote // pokazywanie formularza do głosowania

    // tworzy dane w bazie poczatek
    // new Quiz({
    //     title: 'Pytanie1',
    //     vote: 0
    // }).save()

    Quiz.find({}, (err, data) => {
        //console.log(data);
        let sum = 0;
        data.forEach(item => {
            sum += item.vote;
        });
        res.render('quiz', {
            title: 'Quiz',
            data,
            show,
            sum
        });
    })


});

router.post('/', (req, res) => {
    const id = req.body.quiz; // quiz gdyż type='radio' name='quiz'  

    Quiz.findOne({
        _id: id
    }, (err, data) => {
        data.vote = data.vote + 1;
        data.save((err) => {
            req.session.vote = 1;
            res.redirect('/quiz');
        });
        //console.log(data);




    });


});

module.exports = router;