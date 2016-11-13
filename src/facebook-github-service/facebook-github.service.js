class FacebookGithubService {
    
    listRepositories() {
        return fetch('https://api.github.com/users/facebook/repos')
            .then(response => response.json());
    }  

    async getLast20CommitsFromRepo(repoName) {
        const response = await fetch(`https://api.github.com/repos/facebook/${repoName}/commits`)
        const commits = await response.json();
        return commits.slice(0, 20);
    }  
}

export default FacebookGithubService;