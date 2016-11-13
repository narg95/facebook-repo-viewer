import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ShortText from 'material-ui/svg-icons/editor/short-text';
import Grade from 'material-ui/svg-icons/action/grade';
import Split from 'material-ui/svg-icons/communication/call-split';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import FileFolder from 'material-ui/svg-icons/file/folder';
import './repository-item.css';

const RepositoryItem = ({repoInfo: {name, description, stargazers_count, language, forks_count, updated_at}}) =>
   <ListItem
      leftAvatar={<Avatar icon={<FileFolder />} />}
      primaryText={name}
      secondaryText={
        <div style={{height: 50}}>
          <div className='RepositoryItem-description'>{description}</div> 
          <div>
            <span className='Feature'><ShortText viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> {language}</span>
            <span className='Feature'><Grade viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> {stargazers_count}</span>
            <span className='Feature'><Split viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> {forks_count}</span>
            <span className='Feature'><AccessTime viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> One month ago</span>
          </div>
        </div>
      }/>;

RepositoryItem.PropTypes = {};

export default RepositoryItem;