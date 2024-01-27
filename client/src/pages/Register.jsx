import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#121212',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >   
            <Box 
                sx={{
                    display: 'flex',
                    backgroundColor: '#1e1e1e',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #333',
                    borderRadius: '10px',
                    padding: '2rem',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
                    maxWidth: {xs:'100vh', sm:"400px"},
                    width: '100%',
                    height: {xs:'100vh', sm:"100%"},
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: '#ffffff' }}>Sign up</Typography>

                <TextField
                    label="Username"
                    variant="outlined"
                    icon
                    sx={{
                        marginBottom: '1.5rem',
                        borderRadius: '8px',
                        width: '100%',
                        backgroundColor: '#2b2b2b',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#333',
                            borderColor: '#555',
                        },
                    }}
                    InputProps={{
                        style: { color: '#ffffff' },
                    }}
                    InputLabelProps={{
                        style: { color: '#ffffff' },
                    }}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    icon
                    sx={{
                        marginBottom: '1.5rem',
                        borderRadius: '8px',
                        width: '100%',
                        backgroundColor: '#2b2b2b',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#333',
                            borderColor: '#555',
                        },
                    }}
                    InputProps={{
                        style: { color: '#ffffff' },
                    }}
                    InputLabelProps={{
                        style: { color: '#ffffff' },
                    }}
                />      

                <TextField
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    sx={{
                        marginBottom: '1.5rem',
                        borderRadius: '8px',
                        width: '100%',
                        backgroundColor: '#2b2b2b',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#333',
                            borderColor: '#555',
                        },
                    }}
                    InputProps={{
                        style: { color: '#ffffff' },
                        endAdornment: (
                            <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                sx={{ color: '#ffffff' }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        ),
                    }}
                    InputLabelProps={{
                        style: { color: '#ffffff' },
                    }}
                />          

                <TextField
                    label="Repeat Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    sx={{
                        marginBottom: '1.5rem',
                        borderRadius: '8px',
                        width: '100%',
                        backgroundColor: '#2b2b2b',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#333',
                            borderColor: '#555',
                        },
                    }}
                    InputProps={{
                        style: { color: '#ffffff' },
                        endAdornment: (
                            <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                                sx={{ color: '#ffffff' }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        ),
                    }}
                    InputLabelProps={{
                        style: { color: '#ffffff' },
                    }}
                />
                <Button variant="contained" color="primary" sx={{ borderRadius: '8px', width: '80%', backgroundColor: '#1976d2' }}>
                    Register
                </Button>
                <Box sx={{ marginTop: '1rem', color: '#ffffff' }}>
                    Already have an account? <Link href="/login" underline="always" color="primary">Login</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;
