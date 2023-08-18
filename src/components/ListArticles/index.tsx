import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { TListArticlesData, TListArticlesProps } from './index.types';

export default function ListArticles(props:TListArticlesProps) {
  const { title, data } = props;
  return (
    <Box 
      sx={{
        backgroundColor: "#fff", 
        boxShadow: 3, 
        padding: "1.6rem 1.6rem 0 1.6rem",
        borderRadius: ".8rem",
        overflow: "hidden",
        // marginBottom: {xs: "1.6rem", md: "3.2rem"},
        }}>
      <Typography variant='h2' sx={{
        fontWeight: 600,
        fontSize: "1.8rem",
        borderLeft: ".5rem solid #cf2e2e",
        padding: ".4rem 1.6rem",
        color: "#cf2e2e",
      }}>
        {title}
      </Typography>
      <Grid container spacing={2} sx={{padding: "1.6rem 0", userSelect: "none"}}>
        {data.map((item: TListArticlesData, index: number) => {
          return (
            <Grid key={item.id} item xs={12} >
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
                    style={{ width: "11rem", height: 'auto', borderRadius: ".4rem" }}
                    />
                  {
                    <Typography 
                      variant="h3" 
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