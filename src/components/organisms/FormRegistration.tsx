import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import * as Yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import BaseStepper from '../atoms/BaseStepper';
import Form1 from '../molecules/Form1';
import Form2 from '../molecules/Form2';
import Form3 from '../molecules/Form3';
import ButtonStepper from '../atoms/ButtonStepper';

const steps = ['First', 'Second', 'Third'];

function _renderStepContent(step: number) {
  switch (step) {
    case 1:
      return <Form1 />;
    case 2:
      return <Form2 />;
    case 3:
      return <Form3 />;

    default:
      return <div>Not Found</div>;
  }
}

const validationSchema = [
  // Form 1
  Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().email().required().label('Email'),
  }),
  // Form 2
  Yup.object().shape({
    gender: Yup.string().required().label('Gender'),
  }),
  // Form 3
  Yup.object().shape({
    password: Yup.string().required().label('Password'),
  }),
];

function FormRegistration() {
  const [activeStep, setActiveStep] = useState(1);
  const currentValidationSchema = validationSchema[activeStep - 1];
  const isLastStep = activeStep === steps.length;

  const formProps = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      gender: '',
      password: '',
    },
  });
  const { handleSubmit, control, formState } = formProps;

  const onSubmit = async (value: any) => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(2000).then(() => {
      console.log('value', value);
    });
  };

  function _handleSubmit() {
    if (isLastStep) {
      return handleSubmit(onSubmit)();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }

  function _handleBack() {
    if (activeStep === 1) {
      return;
    }
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Box pt={2}>
        <BaseStepper activeStep={activeStep} steps={steps} />
      </Box>

      <Divider sx={{ mt: 2 }} />

      <Box p={2}>
        <FormProvider {...formProps}>
          <form onSubmit={handleSubmit(_handleSubmit)}>
            {_renderStepContent(activeStep)}
            <ButtonStepper
              steps={steps}
              activeStep={activeStep}
              onClickBack={_handleBack}
              loading={formState.isSubmitting}
            />
          </form>
        </FormProvider>
      </Box>
      {control && <DevTool control={control} />}
    </>
  );
}

export default FormRegistration;
