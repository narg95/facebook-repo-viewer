import { extendObservable } from 'mobx';
import FacebookGithubService from '../facebook-github-service/facebook-github.service';
const facebookService = new FacebookGithubService();

export default class Store {
    
    constructor() {
        
        extendObservable(this, {
            repos: [], 
            commits: [],
            selectedRepo: undefined
        });
        
    }

    async selectRepo(repoName) {
        this.commits = await facebookService.getLast20CommitsFromRepo(repoName);
        this.selectedRepo = repoName;
    }

    async loadRepos() {
        this.repos = await facebookService.listRepositories();
    }    
}