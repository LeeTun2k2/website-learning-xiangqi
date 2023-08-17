import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { TFeaturedArticlesData, TFeaturedArticlesProps } from './index.types';

export default function FeaturedArticles(props:TFeaturedArticlesProps) {
  const { title, data } = props;
  return (
    <Box 
      sx={{
        backgroundColor: "#fff", 
        boxShadow: 3, 
        padding: "1.6rem 1.6rem 0 1.6rem",
        borderRadius: ".8rem",
        overflow: "hidden",
        marginBottom: {sx: "1.6rem", md: "3.2rem"}
        }}>
      <Typography sx={{
        fontWeight: 600,
        fontSize: "1.8rem",
        borderLeft: ".5rem solid #cf2e2e",
        padding: ".4rem 1.6rem",
        color: "#cf2e2e",
      }}>
        {title}
      </Typography>
      <Grid container spacing={2} sx={{padding: "1.6rem 0", userSelect: "none"}}>
        {data.map((item: TFeaturedArticlesData, index: number) => {
          return (
            <Grid key={item.id} item xs={6} >
              <Link href={item.href}>
                <Box sx={{
                  display: "flex", 
                  position: 'relative', 
                  transition: "background-color 1s ease-out 100ms",
                  borderRadius: ".4rem",
                  ":hover": {
                    bgcolor: "#eee"
                  }}}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: index < 2 ? '100%' : "11rem", height: 'auto', borderRadius: ".4rem" }}
                    />
                  {
                    (index < 2) 
                    ? <Typography 
                        variant="h4" 
                        sx={{
                          position: "absolute", 
                          bottom: 0, 
                          padding: "12px 12px", 
                          fontWeight: 600, 
                          fontSize:"1.8rem",
                          lineHeight: "2.8rem",
                          color: "#f7fafc",
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.3));',
                          textShadow: "1px 1px 2px black;",
                          width: "100%",
                          borderRadius: "4px"}}>
                        {item.title}
                      </Typography> 
                    : <Typography 
                      variant="h4" 
                      sx={{
                        padding: "4px 12px", 
                        fontWeight: 500, 
                        fontSize:"1.4rem",
                        display: "flex",
                        alignItems: "center",}}>
                      {item.title}
                    </Typography> 
                  }
                </Box>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
};