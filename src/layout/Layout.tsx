import { Box, Paper, Stack } from "@mui/material"
import { Header } from "./Header"

import { ReactNode } from "react"
import { WidthFull } from "@mui/icons-material"

export const Layout = ({children}:{children:ReactNode})=>{
    return(
        <Stack direction={'column'} sx={{overflow:'hidden'}}>
            <Box sx={{width:'100%' , height:'10vh'}}>
              <Header/>  
            </Box>
            
            <Box sx={{width:'100%' , height:'85vh', overflow:'auto'}}>
                {children}
            </Box>

            <Box sx={{width:'100%' , height:'5vh'}}>
                <Paper sx={{width:'100%' , height:'100%'}}>

                </Paper>
            </Box>
        </Stack>
    )
}