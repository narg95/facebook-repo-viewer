import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';
import { connect } from 'mobx-connect';

class CommitsList extends Component {
    render() {
        const {commits} = this.context.store;
        return (
            <List>
                { commits.map(commit => { 
                    const {sha, message, date, avatar_url, login} = this.getInfoFromCommit(commit);
                    return (
                        <ListItem 
                            key={sha}
                            leftAvatar={<Avatar src={avatar_url} />}
                            primaryText={message}
                            secondaryText={`${login} commited ${moment(date).fromNow()}`}
                        />);
                    }
                )}                                                    
            </List>
        );
    }

    getInfoFromCommit(commit) {
        const {sha, commit: {message, author: {date}}, author} = commit;
        const guarded_author = author || { login: 'unknown' };
        const {avatar_url, login} = guarded_author;
        return {sha, message, date, avatar_url, login};
    }
}

export default connect(CommitsList);