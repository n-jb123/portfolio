import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { Box, Stack, Typography } from "@mui/material";

export const HeroText = () => {
  return (
    <Stack direction={"column"} spacing={2} sx={{ width: "40%" }}>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: "&lt;hi&gt" }}
      />
      <Box sx={{ display: "flex", gap: "48px" }}>
        <Typography variant="h2"> </Typography>
        <Typography variant="h2">Hey</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "48px" }}>
        <Typography variant="h2"> </Typography>
        <Typography variant="h2">I’m Nazem,</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "48px" }}>
        <Typography variant="h2"> </Typography>
        <Typography variant="h2">front-end developer</Typography>
      </Box>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: "&lt;/hi&gt;" }}
      />
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: "&lt;P&gt" }}
      />
      <Box sx={{ display: "flex", gap: "48px" }}>
        <Typography variant="h2"> </Typography>
        <Typography variant="body1">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </Typography>
      </Box>
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: "&lt;/P&gt;" }}
      />
      <PrimaryButton width={{xs:'100%',md:'30%'}}>let’s talk</PrimaryButton>
    </Stack>
  );
};
