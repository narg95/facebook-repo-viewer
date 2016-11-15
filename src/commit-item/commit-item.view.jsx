import React from 'react';
import moment from 'moment';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const CommitItem = ({commit: {sha, message, date, avatar_url, login}}) =>
    <ListItem 
        key={sha}
        leftAvatar={<Avatar src={avatar_url} />}
        primaryText={<div dangerouslySetInnerHTML={{__html: message}}></div>}
        secondaryText={
            <div>
                <span dangerouslySetInnerHTML={{__html: login}}></span>
                <span> commited {moment(date).fromNow()}</span>
            </div>
        }
    />;

export default CommitItem;