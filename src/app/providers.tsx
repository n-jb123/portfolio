"use client";
import ThemeModProvider from "@/theme/provider/themeProvider";
import { CssBaseline } from "@mui/material";
import { ReactNode, useState } from "react";
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeModProvider>
      <CssBaseline />
      {children}
    </ThemeModProvider>
  );
};
