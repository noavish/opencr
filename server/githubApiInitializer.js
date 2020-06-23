const GitHubData = require('./GitHubData')
require('dotenv').config()
const COOKIE = process.env.PROJECT_DOMAIN

function githubApiInitializer(req, res, next) {
    let data = {
		session: req.cookies[COOKIE] && JSON.parse(req.cookies[COOKIE])
	}

	if (data.session && data.session.token) {
        req.githubData = new GitHubData(data.session.token)
        data.session.token = 'obfuscated'
		next()
	} else {
        res.status(401).send()
    }
}

module.exports = githubApiInitializer