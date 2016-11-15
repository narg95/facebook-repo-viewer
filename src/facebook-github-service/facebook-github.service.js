class FacebookGithubService {
    
    listRepositories() {
        return fetch('https://api.github.com/users/facebook/repos')
            .then(response => response.json());
    }  

    async getCommitsFromRepo(repoName) {
        const response = await fetch(`https://api.github.com/repos/facebook/${repoName}/commits`)
        const commits = await response.json();
        const flattenedCommits = this._flattenCommits(commits);
        return flattenedCommits;
    }

    _flattenCommits(commits) {
        if (!commits) {
            return [];
        }

        return commits.map(commit => {
            const {sha, commit: {message, author: {date}}, author} = commit;
            const {avatar_url, login} = author || { login: 'unknown' };
            return {sha, message, date, avatar_url, login};
        });
    }

}

export default new FacebookGithubService();