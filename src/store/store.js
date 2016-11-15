import { extendObservable } from 'mobx';
import facebookGithubService from '../facebook-github-service/facebook-github.service';
import filterCommitsService from '../filter-commits-service/filter-commits-service';

export default class Store {
    
    constructor() {
        
        extendObservable(this, {
            repos: [],
            commitsByRepo: {},
            selectedRepo: undefined,
            searchTextRepo: undefined,
            filteredCommits: undefined,
            get showLatest20Commits() { return !this.filteredCommits; },
            get currentCommits() { return this.commitsByRepo[this.selectedRepo] || []; },
            get latest20Commits() { return this.currentCommits.slice(0, 20); },
            get commits() { return this.filteredCommits ||  this.latest20Commits },
            get repoNames() { return this.repos.map(r => r.name); },
            get commitsText() { return this.commits.map(({login, message, date}) => `${login} ${message} ${date}`); },
            get repoList() { 
                return !this.searchTextRepo 
                    ? this.repos 
                    : this.repos.filter(r => r.name.indexOf(this.searchTextRepo) !== -1); 
            }
        });        
    }

    selectRepo(repoName) {
        this.selectedRepo = repoName;
        this.filteredCommits = null;

        if(this.commitsByRepo[repoName]) {
            return;
        }
        
        this._loadCommits(repoName);
    }

    async _loadCommits(repoName) {
        
        const commits = await facebookGithubService.getCommitsFromRepo(repoName);
        this.commitsByRepo = {
            ...this.commitsByRepo, 
            [repoName]: commits 
        };
    }

    async loadRepos() {
        const repos = await facebookGithubService.listRepositories();
        this.repos = repos;
    }

    filterRepos(name, index) {
        if(index >= 0) {
            this.selectRepo(name);            
        }

        this.searchTextRepo = name;
        this.commits = [];              
    }

    removeFilter() {
        this.searchTextRepo = undefined;    
    }

    setFilter(filterText) {
        this.filteredCommits = filterCommitsService.filterBy(this.currentCommits, filterText);
    }
}

