import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App.jsx'
import "./index.css"

const theme = createTheme({
  typography: {
    fontFamily: '"Protest Guerrilla", sans-serif',
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          '&:hover': {
            color: "#3b82f6",
          }
        }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)