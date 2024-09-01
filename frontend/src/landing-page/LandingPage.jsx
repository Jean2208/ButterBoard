import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Hero from './components/Hero';
import NavBar from "./components/NavBar";
import CalendarBox from "./components/CalendarBox.jsx";
import { Link } from 'react-router-dom';
import TodoApp from "./components/TodoApp.jsx";
export default function LandingPage() {

  return (
    <>
      {/*<div className="gradient-background" />*/}
      {/*<NavBar />*/}
      {/*<Hero />*/}
      {/*  <CalendarBox/>*/}
        <TodoApp/>
    </>
    );
}
