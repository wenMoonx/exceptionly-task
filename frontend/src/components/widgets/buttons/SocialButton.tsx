import { alpha, Button, styled } from "@mui/material";

const SocialButton = styled(Button)<{ customColor: string }>(
  {
    borderRadius: 4,
    margin: "8px 0px",
    paddingTop: 10,
    paddingBottom: 10,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
    color: alpha("#fff", 0.87),
    boxShadow: "none",
  },
  ({ customColor }) => ({
    backgroundColor: customColor,
    "&:hover": {
      backgroundColor: alpha(customColor, 0.8),
    },
  })
);

export default SocialButton;
