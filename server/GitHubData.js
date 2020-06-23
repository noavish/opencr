const GitHub = require('github-api')

class GitHubData { 
    constructor(token) {
        this.ghApi = new GitHub({token})
    }

    async getRepos() {
        let data = {}
        let user = this.ghApi.getUser()
        let repos = await user.listRepos()
        data.repos = repos.data
        return data
    }
}

module.exports = GitHubData