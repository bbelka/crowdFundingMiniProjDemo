const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async(req, res) => {
    try {

        const projectData = await Project.findAll();

        const projects = projectData.map((project => project.get({ plain: true })));

        res.render('homepage', { projects })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/project/:id', async(req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id);

        const project = projectData.get({ plain: true });

        res.render('project', {...project });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
    } else { res.render('login') }
})

router.get('/profile', (req, res) => {

    if (req.session.logged_in) {
        res.render('profile');

    } else { res.redirect('/login') }
})

module.exports = router;