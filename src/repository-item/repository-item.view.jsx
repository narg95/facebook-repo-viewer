import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ShortText from 'material-ui/svg-icons/editor/short-text';
import Grade from 'material-ui/svg-icons/action/grade';
import Split from 'material-ui/svg-icons/communication/call-split';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import FileFolder from 'material-ui/svg-icons/file/folder';
import moment from 'moment';
import { connect } from 'mobx-connect';
import './repository-item.css';

class RepositoryItem extends Component {
  
  render() {
    const {repoInfo: {name, description, stargazers_count, language, forks_count, updated_at}} = this.props;
    const {store} = this.context;
    
    return (
      <ListItem
          onTouchTap={() => store.selectRepo(name)}
          leftAvatar={<Avatar icon={<FileFolder />} />}
          primaryText={name}
          style={name === store.selectedRepo ? {backgroundColor: 'rgba(0, 0, 0, 0.2)'} : {}}
          secondaryText={
            <div style={{height: 50}}>
              <div className='RepositoryItem-description'>{description}</div> 
              <div>
                <span className='Feature'><ShortText style={{marginTop: 5, height: 20, width: 20}}/> {language}</span>
                <span className='Feature'><Grade style={{marginTop: 5, height: 20, width: 20}}/> {stargazers_count}</span>
                <span className='Feature'><Split style={{marginTop: 5, height: 20, width: 20}}/> {forks_count}</span>
                <span className='Feature'><AccessTime style={{marginTop: 5, height: 20, width: 20}}/> {moment(updated_at).fromNow()}</span>
              </div>
            </div>
          }/>
        );
  }
}

export default connect(RepositoryItem);