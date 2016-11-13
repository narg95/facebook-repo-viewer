class FacebookGithubService {
    
    async listRepositories() {
        return fetch('https://api.github.com/users/facebook/repos')
            .then(response => response.json());
    }
}

export default FacebookGithubService;