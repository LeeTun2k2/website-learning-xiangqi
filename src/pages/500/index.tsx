import { Box, Container, Typography } from '@mui/material';
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
          <Grid xs={6} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "-8rem"
          }}>
            <Typography variant="h1">
              500
            </Typography>
            <Typography variant="h6" sx={{margin: "1.6rem"}}>
              Máy chủ đang lỗi, vui lòng thử lại sau vài phút !
            </Typography>
          </Grid>
      </Container>
    </Box>
  );
}