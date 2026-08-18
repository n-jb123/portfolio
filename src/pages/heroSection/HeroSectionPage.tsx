import { Stack } from "@mui/material"
import { Header } from "./HederHeroSection"
import { CVHeroSection } from "./CVHeroSection"
import { HeroText } from "./HeroText"
import { InformationSection } from "./InformationSection"

export const HeroSectionPage = ()=>{
    return(
        <Stack direction={'column'} sx={{alignItems:'center' , justifyContent:'center'}}>
            <Header/>
            <Stack direction={{xs:'column',md:'row'}} spacing={4} sx={{alignItems:'center'}}>
               <CVHeroSection/> 
               <HeroText/>
               <InformationSection/>
            </Stack>
            
        </Stack>
    )
}