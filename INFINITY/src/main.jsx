import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import {BrowserRouter} from "react-router-dom";
import '../index.css';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  </Provider>
  </BrowserRouter>
);
