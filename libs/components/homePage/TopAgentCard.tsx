import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const TopAgentCard: React.FC = () => {
  const agentName = "MARTIN";
  const agentType = "AGENT";
  const agentImage = "IMGurl"; // Replace with the actual image URL

  return (
    <Stack className="top-agent-card" spacing={2}>
      <Box
        className="card-img"
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "50%",
          backgroundImage: `url("/img/profile/girl.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px", // Adjust height as needed
        }}
      >
        <div className="agent-name">{agentName}</div>
      </Box>

      <Box className="info">
        <strong className="title">{agentName}</strong>
        <Typography className="desc">{agentType}</Typography>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
