import React, { Component } from 'react';
import { List } from 'material-ui/List';
import { connect } from 'mobx-connect';
import RepositoryItem from '../repository-item/repository-item.view.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

class RepositoryList extends Component { 

    render() {
        const {store} = this.context;
        const { repoList, repoNames, searchTextRepo } = store;
        return (
            <Paper className='App-leftBar' zDepth={1}>
                <AutoComplete 
                    searchText={searchTextRepo}
                    hintText="Type your search"
                    fullWidth={true}
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={repoNames}
                    maxSearchResults={5}
                    onUpdateInput={(text) => text || store.removeFilter()}
                    onNewRequest={(repoName, index) => store.filterRepos(repoName, index)} 
                />
                <List>
                    { repoList.map(repoInfo => <RepositoryItem repoInfo={repoInfo} key={repoInfo.id}/>) }                                                    
                </List>
            </Paper>
        );
    }
}
        
    
export default connect(RepositoryList);