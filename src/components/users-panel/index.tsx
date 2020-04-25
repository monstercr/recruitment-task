import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useSelector } from 'react-redux';

import { userDataSelector } from '../../modules/users/selectors';

export default function UsersPanel() {
  const users = useSelector(userDataSelector);

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <List>
          {users.map((user: any, key: number) => {
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={user.avatar_url} alt={user.login} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{user.login}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
