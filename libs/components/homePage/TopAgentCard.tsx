import React from "react";
import { Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: "2px",
      }}
    >
      <Stack className="top-agent-card" alignItems="center" textAlign="center">
        <img
          src="/img/profile/girl.svg"
          alt="agent"
          style={{
            width: "209px",
            height: "209px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
          Martin
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Agent
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopAgentCard;
