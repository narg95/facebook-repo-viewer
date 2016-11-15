import React, { Component } from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { connect } from 'mobx-connect';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import CommitItem from '../commit-item/commit-item.view.jsx';

class CommitsList extends Component {
    render() {
        const {store, store: {commits, showLatest20Commits}} = this.context;
        const subHeaderText = showLatest20Commits ? 'Latest 20 commits' : `${commits.length} search results`;
        return (
            <Paper className='App-rightBar' zDepth={1}>
                <TextField 
                    hintText="Type to search for commits"
                    fullWidth={true}
                    onChange={(event) => store.setFilter(event.target.value)}                     
                />
                <List>
                    <Subheader>{subHeaderText}</Subheader>
                    { commits.map(commit => <CommitItem key={commit.sha} commit={commit}/>) }                                                                        
                </List>
            </Paper>
        );
    }
}

export default connect(CommitsList);