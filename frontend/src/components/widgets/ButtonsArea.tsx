import React from 'react';
import { IResolveParams, LoginSocialGoogle, LoginSocialLinkedin, LoginSocialMicrosoft } from 'reactjs-social-login';

import SocialButton from './buttons/SocialButton';
import { GoogleIcon } from './icons/GoogleIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import MicrosoftIcon from './icons/MicrosoftIcon';

const REDIRECT_URI = 'https://connect.wpmailsmtp.com/google/';

const socialButtons = [
  {
    social: LoginSocialGoogle,
    icon: GoogleIcon,
    label: 'SIGN IN WITH GOOGLE',
    color: '#4285F4',
  },
  {
    social: LoginSocialLinkedin,
    icon: LinkedInIcon,
    label: 'SIGN IN WITH Linkedin',
    color: '#2867B2',
  },
  {
    social: LoginSocialMicrosoft,
    icon: MicrosoftIcon,
    label: 'SIGN IN WITH Microsoft',
    color: '#F25022',
  },
];

interface ButtonsAreaProps {
  compat?: boolean;
}

export const ButtonsArea: React.FC<ButtonsAreaProps> = ({ compat }) => {
  return (
    <>
      <p>OR {compat && 'SIGN UP USING'}</p>
      {socialButtons.map((socialButton: any, index: number) => (
        <socialButton.social
          key={index}
          redirect_uri={REDIRECT_URI}
          client_id="364756174135-qei3spmq0u0lkb1kv0f0asaooi45ce2n.apps.googleusercontent.com"
          client_secret="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"
          onResolve={({ provider, data }: IResolveParams) => {
            console.log('Result: ', { provider, data });
          }}
          onReject={(err: any) => {
            console.log(err);
          }}
        >
          <SocialButton
            key={`button_${socialButton.icon.name}`}
            customcolor={socialButton.color}
            startIcon={<socialButton.icon />}
            variant="contained"
            fullWidth={!compat}
            {...(compat
              ? {
                  sx: {
                    margin: '8px',
                    padding: '10px',
                    minWidth: '36px',
                    '> .MuiButton-startIcon': {
                      margin: 0,
                    },
                  },
                }
              : {})}
          >
            {!compat && socialButton.label}
          </SocialButton>
        </socialButton.social>
      ))}
    </>
  );
};
