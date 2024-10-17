import React from 'react';
import Header from '../components/Header';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './pages/Home.css';
import Navbar from '../components/Navbar';
import LoginPage from './LoginPage';
import Login from '../components/Login';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />
      <Navbar />
      <LoginPage />
    </Box>
  );
};

export default Home;