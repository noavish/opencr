import GitHub from 'github-api';

class GitHubData { 
    ghApi: any;
    
    constructor(token: String) {
        this.ghApi = new GitHub({token});
    }

    async getRepos() {
        let user = this.ghApi.getUser();
        let repos = await user.listRepos();
        let data = { repos: repos.data};
        return data;
    }
}

export default GitHubData;