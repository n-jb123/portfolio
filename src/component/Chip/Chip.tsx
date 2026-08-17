import MuiChip, { type ChipProps } from '@mui/material/Chip';
import Chip from '@mui/material/Chip';
export const ChipUI = ({color,label}:ChipProps)=>{
    return(
        <Chip color={color} label={label} sx={{p:"24px",borderRadius:'0.5rem'}}/>
    )
}