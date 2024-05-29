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
        <Box id="hero" sx={{ marginTop: 10 }}>
            <Container>
                <Stack spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '120%' } }}>
                    <Grid container spacing={2}> {/* Add a Grid container */}
                        <Grid item xs={12} sm={6}> {/* First column */}
                            <Typography variant="h2">
                                All Productivity&nbsp;
                                <Typography
                                    component="span"
                                    variant="h2"
                                    color={"gray"}
                                >
                                    Tools
                                </Typography>
                            </Typography>
                            <Typography variant="h2">
                                All In One&nbsp;
                                <Typography
                                    component="span"
                                    variant="h2"
                                    color={"gray"}
                                >
                                    Place
                                </Typography>
                            </Typography>
                            <Typography

                            >
                                Where to grow your business as a blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                Where to grow your business as a blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah                                Where to grow your business as a blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah
                                blah blah blah blah blah blah blah blah blah
                                Where to grow your business as a blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah
                            </Typography>

                            <Box sx={{ marginTop: 2 }}>
                                <Button variant="contained" color="primary">
                                    Start now
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}> {/* Second column */}



                            <Card sx={{ maxWidth: 300}} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={calendar}
                                        alt="calendar"
                                    />

                                </CardActionArea>
                            </Card>

                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
