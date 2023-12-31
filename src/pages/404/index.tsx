import { Box, Button, Container, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

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
          <Grid sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "-8rem"
          }}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6" sx={{margin: "1.6rem"}}>
              Địa chỉ không chính xác !
            </Typography>
            <Button variant="contained" sx={{backgroundColor: "#000"}}>
                <Link href="/" sx={{color: "#fff", textDecoration: "none"}}>Trang chủ</Link>
            </Button>
          </Grid>
      </Container>
    </Box>
  );
}