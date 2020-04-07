import { Card, CardContent } from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Stars';
import React from 'react';
import { useSelector } from 'react-redux';

import { userDataSelector } from '../../modules/users/selectors';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

export default function UsersPanel() {
  const users = useSelector(userDataSelector);

  console.log(users);

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        {users.map((user: any, key: number) => {
          return (
            <ExpansionPanel square key={key}>
              <ExpansionPanelSummary
                aria-controls={`panel${key}d-content`}
                id={`panel${key}d-header`}
              >
                <Typography>{user.login}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" spacing={3}>
                  {user.repositories.map((repo: any, key: number) => {
                    return (
                      <Grid item key={key}>
                        <Card>
                          <CardContent>
                            <h3>{repo.name}</h3>
                            <Typography>{repo.description}</Typography>
                            <div className="repo-score">
                              {repo.score}
                              <StarsIcon />
                            </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </Grid>
    </Grid>
  );
}
