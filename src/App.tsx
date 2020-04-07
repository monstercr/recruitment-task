import { CircularProgress, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useSelector } from 'react-redux';

import FormComponent from './components/form-component';
import UsersPanel from './components/users-panel';
import {
  userErrorSelector,
  userRequestingSelector,
  userSuccessSelector
} from './modules/users/selectors';

function App() {
  const requesting = useSelector(userRequestingSelector);
  const success = useSelector(userSuccessSelector);
  const error = useSelector(userErrorSelector);

  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item>
          <FormComponent />
          {success && <UsersPanel />}

          {requesting && <CircularProgress />}
          {error && <Alert severity="error">Oopss! Something went wrong, please try again!</Alert>}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
