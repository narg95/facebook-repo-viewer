import fuzzy from 'fuzzy';

class FilterCommitsService {
    
    filterBy(commits, filterText) {
        if(!filterText) {
            return;
        }
        
        const options = {
            pre: '<b>',
            post: '</b>',
            extract: ({login, message, date}) => `${message}||${login}`
        };
        const results = fuzzy.filter(filterText, commits, options)
        return results.map(({original, string}) => this._mergeMatchWithCommit(original, string));
    }
    
    _mergeMatchWithCommit(original, string) {
        const [message, login] = string
            .split('||');
        return {...original, login, message};
    }
}

export default new FilterCommitsService();