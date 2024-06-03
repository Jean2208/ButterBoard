import * as React from 'react';
import {alpha, CardActionArea, CardMedia} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import reactLogo from '../../assets/react.svg';
import calendar from '../../assets/calendar.png';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";



export default function Hero() {

    return (
        <Box sx={{ marginTop: 10 }}>
            <Container>
                <Stack spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '120%' } }}>
                    <Grid container spacing={2}> {/* Add a Grid container */}
                        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> {/* First column */}
                            <Typography 
                                variant="h2" 
                                sx={{
                                    marginBottom: '10px',
                                    fontWeight: 600,
                                    color: '#F2F2F2'
                                }}
                                >
                                All productivity tools
                            </Typography>
                            <Typography 
                                variant="h2" 
                                sx={{
                                    marginBottom: '10px',
                                    fontWeight: 600, 
                                    color: 'var(--primary-color-darkblue)'
                                }}
                                >
                                All in one place
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontWeight: 501,
                                    color: 'var(--neutral-color-white)'
                                }}
                                >
                                Elevate your efficiency with our comprehensive productivity suite.
                            </Typography>
                            <Box sx={{ marginTop: 3 }}>
                              <Button 
                                variant="contained" 
                                sx={{
                                    color: 'var(--hover-color-whitegray)',
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    py: '10px', 
                                    px: '30px',
                                    boxShadow: 'none',
                                    backgroundColor: 'var(--primary-color-darkblue)',
                                    '&:hover': {
                                      backgroundColor: 'var(--hover-color-darkblue)',
                                      boxShadow: 'none',
                                    },
                                }}
                                >
                                  Start now
                              </Button>
                            </Box>
                        </Grid >
                        <Grid item xs={12} sm={4}> {/* Second column */}
                            <Card sx={{backgroundColor: 'transparent'}}>
                                <Box sx={{borderRadius: '20px',  border: '15px solid rgba(255, 255, 255, 0)', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={calendar}
                                        alt="calendar"
                                        sx={{ height: 'auto', backgroundColor: 'transparent', }}
                                    />
                                </CardActionArea>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
