import {  AvatarUI } from "@/component/Avatar/Avatar";
import { Card } from "@/component/card/card";
import { Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Divider } from "@/component/divider/divider";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import WorkIcon from "@mui/icons-material/Work";
import LinkIcon from "@mui/icons-material/Link";
export const CVHeroSection = () => {
  return (
    <Card borderRadius="160px 0  160px 0" width={"max-content"}>
      <Stack direction={"column"} spacing={2} sx={{ alignItems: "center" }}>
        <AvatarUI width={'128px'} height={'128px'}/>
        <Typography variant="h2">Nazem Jbara</Typography>
        <Typography variant="body1">front-end developer</Typography>
        <Divider width={"50%"} height={"2px"} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ display: "flex", gap: 2, alignItems: "start" }}
          >
            <EmailIcon />
            nazemjbaara@gmail.com
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", gap: 2, alignItems: "start" }}
          >
            <LocationPinIcon />
            Latakia
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", gap: 2, alignItems: "start" }}
          >
            <WorkIcon />
            Full-time / Freelancer
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", gap: 2, alignItems: "start" }}
          >
            <LinkIcon />
            https://github.com/n-jb123
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};
