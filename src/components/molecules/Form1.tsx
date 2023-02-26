import React from 'react';
import { Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FieldInputText from '../atoms/FieldInputText';

function FormOne() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <FieldInputText name='name' control={control} label='Name' />
      <FieldInputText
        type='email'
        name='email'
        label='Email'
        control={control}
      />
    </Stack>
  );
}

export default FormOne;
