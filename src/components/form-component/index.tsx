import './styles.scss';

import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { userRequest } from '../../modules/users/actions';
import { userRequestingSelector } from '../../modules/users/selectors';
import { IUsersRequestPayload } from '../../modules/users/types/actions';

const FormComponent = () => {
  const initialValues = {
    key: ''
  };

  const validationSchema = yup.object().shape<any>({
    key: yup.string().label('key')
  });

  const dispatch = useDispatch();
  const requesting = useSelector(userRequestingSelector);

  const onSubmit = async (
    values: IUsersRequestPayload,
    actions: FormikHelpers<IUsersRequestPayload>
  ) => {
    await dispatch(
      userRequest({
        ...values
      })
    );
  };

  return (
    <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues}>
      {({ setFieldValue }) => (
        <Form className="form">
          <Grid container justify="center" alignItems="flex-end" spacing={3}>
            <Grid item>
              <Field
                name="key"
                label={'Enter username'}
                onChange={(e: React.ChangeEvent<any>) => {
                  setFieldValue('key', e.target.value);
                }}
                component={TextField}
              />
            </Grid>
            <Grid item>
              <Button disabled={requesting} type="submit" variant="outlined" color="primary">
                Search
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
