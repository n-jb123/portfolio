import { Avatar } from "@mui/material"
import { AvatarType } from "../types/typesComponent"

export const AvatarUI = ({width,height}:AvatarType)=>{
    return(
        <Avatar sx={{width,height}}/>
    )
}