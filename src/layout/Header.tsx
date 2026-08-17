import { Logo } from "@/component/Logo/Logo"
import { Paper } from "@mui/material"

export const Header = ()=>{
    return(
        <Paper sx={{width:'100%',boxShadow:'2px 10px 20px #3B82F6'}}>
            <Logo/>
        </Paper>
    )
}