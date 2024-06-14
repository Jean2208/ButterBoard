import * as React from 'react';
import { alpha, CardActionArea, CardMedia, useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import calendar from '../../assets/calendar.png';
import Card from "@mui/material/Card";

export default function Hero() {
    const theme = useTheme();
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));

    const getFontSize = () => {
        if (isXl) return { heading: '3rem', subheading: '2.5rem', body: '1.25rem' };
        if (isLg) return { heading: '3rem', subheading: '2.5rem', body: '1.25rem' };
        if (isMd) return { heading: '2.5rem', subheading: '2rem', body: '1.125rem' };
        if (isSm) return { heading: '2.4rem', subheading: '2rem', body: '1.125rem' };
        if (isXs) return { heading: '2.1rem', subheading: '1.8rem', body: '1.110rem' };

    };

    const fontSize = getFontSize();

    return (
        <Box id="hero" sx={{ marginTop: 10 }}>
            <Container>
                <Stack spacing={1} useFlexGap sx={{ width: '100%' }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ justifyContent: 'center' }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={isMd ? 6 : 12}
                            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: isMd ? 'left' : 'center' }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    marginBottom: '10px',
                                    fontWeight: 600,
                                    color: '#F2F2F2',
                                    fontSize: fontSize.heading
                                }}
                            >
                                All productivity tools
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    marginBottom: '10px',
                                    fontWeight: 600,
                                    color: 'var(--primary-color-darkblue)',
                                    fontSize: fontSize.subheading
                                }}
                            >
                                All in one place
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 501,
                                    color: 'var(--neutral-color-white)',
                                    fontSize: fontSize.body
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
                                            backgroundColor: 'var(--primary-color-darkblue)',
                                        },
                                    }}
                                >
                                    Start now
                                </Button>
                            </Box>
                        </Grid>
                        {isMd && (
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                                    <Box sx={{ borderRadius: '20px', overflow: 'hidden' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={calendar}
                                                alt="calendar"
                                                sx={{ height: 'auto' }}
                                            />
                                        </CardActionArea>
                                    </Box>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
