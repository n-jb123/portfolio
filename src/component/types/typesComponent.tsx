import { PaletteMode } from "@mui/material";
import "@mui/material/styles";
import {
  MouseEventHandler,
  ReactNode,
} from "react";

export type ButtonType = {
  children: ReactNode;
  width?: string | { xs: string; md: string };
  height?: string | { xs: string; md: string };
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: string;
  disabled?: boolean;
};

export type cardType = {
  children?: ReactNode;
  height?: string | { xs: string; md: string };
  width?: string | { xs: string; md: string };
};


export type dividerType = {
  height: string | { xs: string; md: string };
  width: string | { xs: string; md: string };
};

export type SwitchModeType = {
  handleToggleTheme: () => void;
  Mode: PaletteMode;
};
