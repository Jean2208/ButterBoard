import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',

      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
      >
        <Stack spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
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
            textAlign="center"
            color="lightgray"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Where to grow your business as a blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah
              Where to grow your business as a blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah



          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >

            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>

      </Container>
    </Box>
  );
}
