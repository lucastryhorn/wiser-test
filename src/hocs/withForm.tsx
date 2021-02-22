import React from 'react';
import {
  useForm,
  Controller,
  useWatch,
  FormProviderProps,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const withForm = (
  EnhancedComponent,
  { validationSchema, defaultValues },
) => props => {
  const { handleSubmit, setValue, register, ...restProps } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues,
    resolver: yupResolver(validationSchema),
    validationResolver: undefined,
    validationContext: undefined,
    validateCriteriaMode: 'firstError',
    submitFocusError: true,
    nativeValidation: false,
  });

  return (
    <EnhancedComponent
      {...props}
      {...restProps}
      register={register}
      setValue={setValue}
      handleSubmit={handleSubmit}
      Controller={Controller}
      useWatch={useWatch}
    />
  );
};
