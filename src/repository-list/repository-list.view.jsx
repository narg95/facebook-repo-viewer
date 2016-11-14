import React from 'react';
import { List } from 'material-ui/List';
import { connect } from 'mobx-connect';
import RepositoryItem from '../repository-item/repository-item.view.jsx';

const RepositoryList = connect((props, {store: { repos }}) => 
    <List>
        { repos.map(repoInfo => <RepositoryItem repoInfo={repoInfo} key={repoInfo.id}/>) }                                                    
    </List>
);
        
    
export default RepositoryList;