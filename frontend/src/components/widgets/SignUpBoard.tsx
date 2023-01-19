import React from 'react';
import { alpha, Box, Button, Card, CardActions, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';

import { ButtonsArea } from './ButtonsArea';
import { ExceptionlyLogo } from './icons/ExceptionlyLogo';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

export const SignUpBoard = () => {
  const [isCreateMode, setIsCreateMode] = React.useState<boolean>(false);

  const toggleIsCreateMode = () => {
    setIsCreateMode((prev) => !prev);
  };

  return (
    <Card elevation={0} sx={{ borderRadius: '0px 4px 4px 0px' }}>
      <CardMedia sx={{ margin: '60px auto 8px' }}>
        <ExceptionlyLogo style={{ fontSize: 200, height: 'inherit' }} />
      </CardMedia>

      <CardContent sx={{ margin: 'auto 60px 60px' }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
            color: alpha('#000', 0.76),
            margin: '0 auto 8px',
          }}
        >
          Sign {isCreateMode ? 'Up' : 'In'} to your account
        </Typography>
        <Collapse in={isCreateMode} collapsedSize={440} easing="easeOut" timeout={250}>
          <Fade in={!isCreateMode} easing="easeOut" timeout={250}>
            <div style={{ display: isCreateMode ? 'none' : 'block' }}>
              <SignInForm />
              <ButtonsArea />
            </div>
          </Fade>
          <Fade in={isCreateMode} easing="easeOut" timeout={250}>
            <div style={{ display: isCreateMode ? 'block' : 'none' }}>
              <SignUpForm toggleIsCreateMode={toggleIsCreateMode} />
              <ButtonsArea />
            </div>
          </Fade>
        </Collapse>
      </CardContent>
      <CardActions sx={{ backgroundColor: alpha('#252525', 0.9) }}>
        <Box component="div" sx={{ display: 'flex', margin: '8px auto', alignItems: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.25px',
              color: alpha('#fff', 0.87),
            }}
          >
            {isCreateMode ? 'Already' : "Don't"} have an account?
          </Typography>
          <Button onClick={() => toggleIsCreateMode()}>{isCreateMode ? 'SIGN IN HERE' : 'Create an account'}</Button>
        </Box>
      </CardActions>
    </Card>
  );
};
