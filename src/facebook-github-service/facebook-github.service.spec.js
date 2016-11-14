import FacebookGithubService from './facebook-github.service';

describe('Facebook Github Service', () => {
    
    describe('When listing the public repositories', () => {
        
        it('should return the json() response', async () => {
            const service = new FacebookGithubService();
            const repositories = [];
            fetch = url => Promise.resolve({ json: () => Promise.resolve(repositories) });

            const result = await service.listRepositories();
            
            expect(result).toBe(repositories)
        });       
    });

    describe('When listing the commits from a given repository', () => {
        
        it('should return the last 20', async () => {
            const service = new FacebookGithubService();
            const returnedCommits = [...Array(30).keys()];
            const expectedCommits = [...returnedCommits.slice(0, 20)]
            fetch = url => Promise.resolve({ json: () => Promise.resolve(returnedCommits) });

            const commits = await service.getLast20CommitsFromRepo('a given repo');
            
            expect(commits).toEqual(expectedCommits);
        });       
        
        it('should return all commits', async () => {
            const service = new FacebookGithubService();
            const returnedCommits = [0, 1 ,2];
            const expectedCommits = [0, 1, 2]
            fetch = url => Promise.resolve({ json: () => Promise.resolve(returnedCommits) });

            const commits = await service.getLast20CommitsFromRepo('a given repo');
            
            expect(commits).toEqual(expectedCommits);
        });       
    });
});
