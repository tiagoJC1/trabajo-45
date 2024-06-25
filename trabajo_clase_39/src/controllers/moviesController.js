const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const { Movies, Genres, Actor } = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
// const Movies = db.Movie;
// const Genres = db.Genre;
// const Actors = db.Actor;




const moviesController = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', { movies })
            })
            .catch((err) => {
                res.send(err.message)
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include: ['genre']
            })
            .then(movie => {

                res.render('moviesDetail.ejs', { movie });
            })
            .catch((err) => {
                res.send(err.message)
            });
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            })
            .catch((err) => {
                res.send(err.message)
            });
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 }
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            })
            .catch((err) => {
                res.send(err.message)
            })
    },

    add: function (req, res) {
        db.Genre.findAll()
            .then(genres => {
                res.render("moviesAdd", { genres })
            })
            .catch((err) => {
                res.send(err.message)
            })
    },
    create: function (req, res) {

        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        });


        res.redirect("/movies")
            .catch((err) => {
                res.send(err.message)
            })
    },
    edit: function (req, res) {

        let movie = db.Movie.findByPk(req.params.id,{
            include: ['genre']
        });
        let genres = db.Genre.findAll();
        let actors = db.Actor.findAll();

        Promise.all([movie, genres, actors])

            .then(([movie, genre, actors]) => {
                res.render('moviesEdit', { movie, genre, actors });
            })
            .catch((err) => {
                res.send(err.message)
            })
    },
    update: function (req, res) {

        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/movies/edit/" + req.params.id)
            .catch((err) => {
                res.send(err.message)
            })
    },
    delete: function (req, res) {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDelete', { movie });
            })
            .catch((err) => {
                res.send(err.message)
            })

    },
    destroy: function (req, res) {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/movies")
            .catch((err) => {
                res.send(err.message)
            })
    }
}

module.exports = moviesController;