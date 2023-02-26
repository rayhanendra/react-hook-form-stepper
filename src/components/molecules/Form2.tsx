import React from 'react';
import { Box, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { genderOptions } from '../../utils/constants';
import FieldInputSelect from '../atoms/FieldInputSelect';

function FormTwo() {
  const { control } = useFormContext();

  return (
    <Stack gap={2}>
      <FieldInputSelect
        name='gender'
        label='Gender'
        control={control}
        options={genderOptions}
      />
      <Box mb={7} />
    </Stack>
  );
}

export default FormTwo;
