import React, { useCallback } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { LoginType } from '../../../../commom-types';
import { Controller } from 'react-hook-form';

import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';

import { withForm } from '../../../../hocs/withForm';
import defaultValues, { validationSchema } from '../../../../schema/login';

import { RootState } from '../../../../store/reducers';
import { Creators as AuthCreators } from '../../../../store/reducers/auth';
import { View } from 'react-native';

const mapStateToProps = ({ auth }: RootState) => ({
  loading: auth.getIn(['loading']),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      loginRequest: AuthCreators.getLoginRequest,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type LoginFormProps = PropsFromRedux & UseFormMethods;

const Form = ({ handleSubmit, errors, control }: LoginFormProps) => {
  const submit = useCallback((data: LoginType) => {
    console.log(data);
  }, []);

  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ value, onChange }) => (
          <TextInput
            placeholder="user.name@mail.com"
            value={value}
            onChangeText={text => onChange(text)}
            error={errors.email?.message}
            placeholderTop={'E-MAIL'}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ value, onChange }) => (
          <TextInput
            placeholder="******"
            value={value}
            onChangeText={text => onChange(text)}
            error={errors.password?.message}
            placeholderTop={'SENHA'}
          />
        )}
      />

      <View style={{ position: 'absolute', bottom: -25 }}>
        <Button
          loading={false}
          onPress={handleSubmit(submit)}
          width="160px"
          height="48px"
          textColor="white">
          ENTRAR
        </Button>
      </View>
    </>
  );
};

export default connector(withForm(Form, { defaultValues, validationSchema }));
