import { Card } from "@/component/card/card";
import { Box, Paper, Typography } from "@mui/material";

export const InformationSection = () => {
  return (
      <Paper sx={{ backgroundColor: "background.paper" , borderRadius:'24px ', p:'24px' , display:'flex',flexDirection:'column' , gap:2}}>
        <Box sx={{display:'flex' , alignItems:'center' , gap:2}}>
          <Typography variant="h2" sx={{ color: "primary.main" }}>
            6
          </Typography>
          <Typography>Programming Language</Typography>
        </Box>
        <Box sx={{display:'flex' , alignItems:'center' , gap:2}}>
          <Typography variant="h2" sx={{ color: "primary.main" }}>
            3
          </Typography>
          <Typography>Development Tools</Typography>
        </Box>
        <Box sx={{display:'flex' , alignItems:'center' , gap:2}}>
          <Typography variant="h2" sx={{ color: "primary.main" }}>
            1
          </Typography>
          <Typography>Years of Experience</Typography>
        </Box>
      </Paper>
  );
};
