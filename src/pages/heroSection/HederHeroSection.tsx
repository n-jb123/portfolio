import { Box, Typography } from "@mui/material"


export const Header = ()=>{
    return(
        <Box sx={{width:'100%' , display:"flex" , textAlign:'center'}}>
           <Typography variant="h1" sx={{width:'100%'}}>
            developer
        </Typography>
        </Box>
     )   
}