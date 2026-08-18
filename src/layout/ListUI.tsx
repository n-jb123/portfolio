"use client";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
export const ListUI = () => {
    const [active,setActive]=useState<string>('Home')
  const router = useRouter();
  const pages = [
    {
      id: 1,
      label: "Home",
      icon: <HomeIcon></HomeIcon>,
      router: "/",
    },
     {
      id: 2,
      label: "About",
      icon: <InfoIcon></InfoIcon>,
      router: "/About",
    },
  ];
  return (
    <List sx={{display:'flex' , gap:2}}>
      {pages.map((page) => {
        const isActive=page.label===active? true:false
        return (
          
          <ListItemButton
          
          sx={{transition:'all 0.3s',backgroundColor:isActive? 'secondary.main':'','&:hover':{scale:'1.1',backgroundColor:'secondary.main'}}}
            key={page.id}
            onClick={() => {router.push(page.router) ;
                setActive(page.label)
            }}
          >
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText>{page.label}</ListItemText>
          </ListItemButton>
        );
      })}
    </List>
  );
};
