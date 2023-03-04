import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      MOOO<span style={{ color: theme.palette.primary.main }}>VIES</span>
    </Typography>
  );
};

export default Logo;
