import facebookGithubService from './facebook-github.service';

describe('Facebook Github Service', () => {
    
    describe('When listing the public repositories', () => {
        
        it('should return the json() response', async () => {
            const repositories = [];
            fetch = url => Promise.resolve({ json: () => Promise.resolve(repositories) });

            const result = await facebookGithubService.listRepositories();
            
            expect(result).toBe(repositories)
        });       
    });

    describe('When listing the commits from a given repository', () => {
        
        it('should return the expected flattened commits', async () => {
            const commit =  {sha: 'sha', commit: {message: 'message', author: {date: 'date'}}, author: {login: 'login'}};
            const expectedCommits = [{sha: 'sha', message: 'message', date: 'date', login: 'login'}];
            fetch = url => Promise.resolve({ json: () => Promise.resolve([commit]) });

            const commits = await facebookGithubService.getCommitsFromRepo('a given repo');
            
            expect(commits).toEqual(expectedCommits);
        });    
    });
});
