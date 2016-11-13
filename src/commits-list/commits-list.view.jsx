import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';

const CommitsList = ({commits}) => 
    <List>
        { commits.map(({commit: {message, author: {date}}, author: {login, avatar_url= ''}}) => 
            <ListItem 
                leftAvatar={<Avatar src={avatar_url} />}
                primaryText={message}
                secondaryText={`${login} commited ${moment(date).fromNow()}`}
            /> )}                                                    
    </List>;

export default CommitsList;