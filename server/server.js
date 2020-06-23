const express = require("express");
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const crypto = require('crypto')
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const githubApiInitializer = require('./githubApiInitializer')

require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT || 5000
const COOKIE = process.env.PROJECT_DOMAIN

let scopes = ['notifications', 'user:email', 'read:org', 'repo']
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: `http://localhost:${process.env.DEV_SERVER_PORT || port}/auth/github/login/return`,
            scope: scopes.join(' ')
        },
        function(token, tokenSecret, profile, cb) {
            return cb(null, { profile: profile, token: token })
        }
    )
)
passport.serializeUser(function(user, done) {
    done(null, user)
})
passport.deserializeUser(function(obj, done) {
    done(null, obj)
})
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser())
app.use(
    expressSession({
        secret: crypto.randomBytes(64).toString('hex'),
        resave: true,
        saveUninitialized: true
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/github', githubApiInitializer)

app.get('/auth/github/login', passport.authenticate('github'))

app.get('/auth/github/login/return',
    passport.authenticate('github', { successRedirect: '/auth/setcookie', failureRedirect: '/' })
)

app.get('/auth/setcookie', function(req, res) {
    let data = {
        user: req.session.passport.user.profile._json,
        token: req.session.passport.user.token
    }
  res.cookie(COOKIE, JSON.stringify(data))
  res.redirect('/')
})

app.get('/auth/logout', function(req, res) {
    res.clearCookie(COOKIE)
    res.redirect('/')
})

app.get('/api/github/repos', async (req, res) => {
    let githubData
    try {
        githubData = await req.githubData.getRepos()
    } catch (error) {
        githubData = { error: error }
    }
    res.json(githubData)
})

app.listen(port, () => console.log(`Listening on ${port}`));
