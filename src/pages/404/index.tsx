import { Box, Button, Container, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
          <Grid xs={6} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "-8rem"
          }}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Cờ tướng"
              width={500} 
              height={250}
            />
            <Typography variant="h6" sx={{margin: "1.6rem"}}>
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" sx={{backgroundColor: "#000"}}>
                <Link href="/" sx={{color: "#fff", textDecoration: "none"}}>Back Home</Link>
            </Button>
          </Grid>
      </Container>
    </Box>
  );
}