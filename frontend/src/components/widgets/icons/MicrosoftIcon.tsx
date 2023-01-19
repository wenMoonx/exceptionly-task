import React from 'react';
import { SvgIcon } from '@mui/material';

type IProps = {
  style: object;
};

const MicrosoftIcon: React.FC<IProps> = (props) => {
  return (
    <SvgIcon fill="none" viewBox="0 0 18 18" {...props}>
      {' '}
      <path
        fill="#fff"
        fillOpacity=".87"
        d="M2.875 2.625v5.879h5.852V2.625H2.875Zm6.371 0v5.879h5.879V2.625H9.246ZM2.875 9.023v5.852h5.852V9.023H2.875Zm6.371 0v5.852h5.879V9.023H9.246Z"
      />
    </SvgIcon>
  );
};

export default MicrosoftIcon;
