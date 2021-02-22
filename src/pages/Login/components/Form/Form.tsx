import React, { useCallback, useState } from 'react';
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
import { useTheme } from 'styled-components';

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

const Form = ({ handleSubmit, errors, control, setValue }: LoginFormProps) => {
  const { colors } = useTheme();
  const [show, setShow] = useState(false);

  const setShowPassword = useCallback(() => {
    setShow(!show);
  }, [show, setShow]);

  const submit = useCallback((data: LoginType) => {
    console.log(data);
  }, []);

  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ value, onChange }) => (
          <TextInput
            placeholder="user.name@mail.com"
            value={value}
            onChangeText={text => onChange(text)}
            error={errors.email?.message}
            placeholderTop={'E-MAIL'}
            {...(!!value
              ? { icon: 'x', onPressIcon: () => setValue('email', '') }
              : {})}
            {...(!!errors.email?.message ? { colorIcon: colors.error } : {})}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ value, onChange }) => (
          <TextInput
            placeholder="******"
            value={value}
            onChangeText={text => onChange(text)}
            error={errors.password?.message}
            placeholderTop={'SENHA'}
            icon={show ? 'eye-off' : 'eye'}
            onPressIcon={setShowPassword}
            secureTextEntry={!show}
          />
        )}
      />

      <View style={{ position: 'absolute', bottom: -25 }}>
        <Button
          loading={false}
          onPress={handleSubmit(submit)}
          width="160px"
          height="48px"
          textColor="white"
          colors={['#9D25B0', '#383E71']}>
          ENTRAR
        </Button>
      </View>
    </>
  );
};

export default connector(withForm(Form, { defaultValues, validationSchema }));
