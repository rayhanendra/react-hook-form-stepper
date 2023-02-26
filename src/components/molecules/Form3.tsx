import React from 'react';
import { Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FieldInputText from '../atoms/FieldInputText';

function FormThree() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <FieldInputText
        type='password'
        name='password'
        label='Password'
        control={control}
      />
    </Stack>
  );
}

export default FormThree;
