import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Protest Guerrilla", sans-serif',
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          "&:hover": {
            color: "#3b82f6",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#1976d2",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: "#1976d2",
              borderWidth: "2px",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "white",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        }
      }
    }
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
