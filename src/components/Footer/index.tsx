import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './index.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Typography variant="h5">
        &copy; {new Date().getFullYear()} DẠY CỜ TƯỚNG - Bản quyền nội dung thuộc về website DẠY CỜ TƯỚNG.
      </Typography>
    </footer>
  );
}