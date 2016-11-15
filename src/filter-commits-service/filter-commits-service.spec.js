import filterService from './filter-commits-service';

describe('Filter Commits Service', () => {
    
    describe('When filtering by emtpy text', () => {
        
        it('should return null', async () => {
            const result = filterService.filterBy([], null);
            
            expect(result).toBe(undefined)
        });       
    });

    describe('When filtering a commits', () => {
        
        it('should return the expected commit message with <b> highlighting the matching parts', async () => {
            const expectedMessage = '<b>t</b>his is a message';

            const [commit] = filterService.filterBy([{message:'this is a message'}], 't');
            
            expect(commit.message).toEqual(expectedMessage)
        });       
    });
});
