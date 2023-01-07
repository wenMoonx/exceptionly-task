import { SvgIcon } from "@mui/material";
import React from "react";

export const GoogleIcon: React.FC = (props) => {
  return (
    <SvgIcon fill="none" viewBox="0 0 18 18" {...props}>
      <path
        fill="#fff"
        fillOpacity=".87"
        d="M15.672 8.914c0-.437-.055-.766-.11-1.121H9.11v2.324h3.829c-.137 1.012-1.149 2.926-3.829 2.926-2.324 0-4.21-1.914-4.21-4.293 0-3.8 4.484-5.55 6.89-3.227l1.86-1.777a6.577 6.577 0 0 0-4.54-1.777A6.763 6.763 0 0 0 2.33 8.75a6.745 6.745 0 0 0 6.78 6.781c3.91 0 6.563-2.734 6.563-6.617Z"
      />
    </SvgIcon>
  );
};
