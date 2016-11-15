import fuzzy from 'fuzzy';

class FilterCommitsService {
    
    filterBy(commits, filterText) {
        if(!filterText) {
            return;
        }
        
        const options = {
            pre: '<b>',
            post: '</b>',
            extract: ({login, message, date}) => `${login}||${message}||${date}`
        };
        const results = fuzzy.filter(filterText, commits, options)
        return results.map(({original, string}) => this._mergeMatchWithCommit(original, string));
    }
    
    _mergeMatchWithCommit(original, string) {
        const [login, message] = string
            .split('||');
        return {...original, login, message};
    }
}

export default new FilterCommitsService();