import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Progress = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default Progress;
