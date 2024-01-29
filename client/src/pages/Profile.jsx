import React from 'react';
import Navigation from '../components/Navigation';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Profile = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
                <Navigation />
                <Container maxWidth="lg" sx={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Avatar alt="" src="profile.jpg" sx={{ width: 150, height: 150 }} />
                                <Typography variant="h4" sx={{ color: 'white', marginTop: '1rem' }}>Username</Typography>
                                <Typography variant="body1" sx={{ color: 'white', marginTop: '0.5rem' }}>Friends: 123</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Paper sx={{ p: 4 }}>
                                <Typography variant="h5" sx={{ color: 'white', marginBottom: '1rem' }}>Edit Profile</Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Name"
                                                variant="outlined"
                                                fullWidth
                                                defaultValue="User's Name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                defaultValue="user@example.com"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="New Password"
                                                variant="outlined"
                                                type="password"
                                                fullWidth
                                                defaultValue=""
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Repeat Password"
                                                variant="outlined"
                                                type="password"
                                                fullWidth
                                                defaultValue=""
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary">
                                                Update Profile
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default Profile;
