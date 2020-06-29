import GitHubData from './GitHubData';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();
const COOKIE = process.env.PROJECT_DOMAIN;

function GithubApiInitializer(req: Request, res: Response, next: NextFunction) {
    let data = {
		session: req.cookies[COOKIE] && JSON.parse(req.cookies[COOKIE])
	}

	if (data.session && data.session.token) {
        res.locals.githubData = new GitHubData(data.session.token)
        data.session.token = 'obfuscated'
		next()
	} else {
        res.status(401).send()
    }
}

export default GithubApiInitializer;