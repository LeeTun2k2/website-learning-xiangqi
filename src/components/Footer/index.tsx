import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography
        sx={{
          display: {xs: "none", md:"flex",},
          fontSize: "1.4rem",
          
        }}>
        &copy; {new Date().getFullYear()} DẠY CỜ TƯỚNG - Bản quyền nội dung thuộc về website DẠY CỜ TƯỚNG.
      </Typography>
      <Typography variant="h1" 
        sx={{
          display: {xs: "flex", md:"none",},
          fontSize: "1.4rem",
          
        }}>
        &copy; {new Date().getFullYear()} DẠY CỜ TƯỚNG
      </Typography>
    </footer>
  );
}