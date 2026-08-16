'use client'
import { OutlineButton } from "@/component/buttons/OutlineButton";
import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { Card } from "@/component/card/card";
import { Divider } from "@/component/divider/divider";
import { SearchBar } from "@/component/searchBar/searchBar";
import { SwitchMode } from "@/component/switchMode/SwitchMode";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@/theme/provider/themeProvider";
export default function Home() {

  const {Mode, handleToggleTheme}=useTheme()
  return (
    <Stack spacing={2}>
       <Typography variant="h1">
      buttons
    </Typography>
    <Divider width={'30%'} height={'2px'}/>
    <Stack direction={'row'} spacing={1}>
      <OutlineButton onClick={()=>{}}>
        outline
      </OutlineButton>
      <OutlineButton onClick={()=>{}} disabled>
        outline disabled
      </OutlineButton>
      <PrimaryButton onClick={()=>{}}>
        primary
      </PrimaryButton>
      <PrimaryButton onClick={()=>{}} disabled>
        primary disabled
      </PrimaryButton>
    </Stack>
    <Divider width={'70%'} height={'4px'}/>
    <Typography> card</Typography>
    <Divider width={'30%'} height={'2px'}/>
    <Card>
      <h1>nazem jbara</h1>
    </Card>
    <Divider width={'70%'} height={'4px'}/>
    <Typography>search bar</Typography>
    <Divider width={'30%'} height={'2px'}/>
    <SearchBar/>
    <Divider width={'70%'} height={'4px'}/>
    <Typography>switch toggle</Typography>
    <Divider width={'30%'} height={'2px'}/>
    <Box sx={{width:'25px' , height:'24px'}}>
      <SwitchMode Mode={Mode} handleToggleTheme={handleToggleTheme}/>
    </Box>
    
    </Stack>
   
  );
}
