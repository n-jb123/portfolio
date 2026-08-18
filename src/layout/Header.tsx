import { Logo } from "@/component/Logo/Logo"
import { Paper, Stack } from "@mui/material"
import { ListUI } from "./ListUI"

export const Header = ()=>{
    return(
        <Paper sx={{width:'100%',boxShadow:'2px 10px 20px #3B82F6'}}>
            <Stack direction={'row'}>
               <Logo/>
            <ListUI/> 
            </Stack>
            
        </Paper>
    )
}