import React from 'react';
import { alpha, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { WelcomeLogo } from './icons/WelcomeLogo';

export const WelcomeBoard: React.FC = () => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: '4px 0px 0px 4px',
        backgroundColor: '#252525',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia>
        <WelcomeLogo style={{ fontSize: 310, margin: '126px auto 40px' }} />
      </CardMedia>
      <CardContent sx={{ marginTop: 'auto', marginBottom: '46px' }}>
        <Typography
          variant="h6"
          sx={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.5px',
            color: alpha('#fff', 0.87),
            marginBottom: '16px',
          }}
        >
          WELCOME TO THE MARKETPLACE
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.25px',
            color: alpha('#fff', 0.74),
          }}
        >
          Exceptionly provides hands-on tested remote software engineers unlike any other outsourcing company. Our
          product delivers talent directly for hiring without a lifetime markup over 400%.
        </Typography>
      </CardContent>
    </Card>
  );
};
