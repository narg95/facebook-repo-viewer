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
});
