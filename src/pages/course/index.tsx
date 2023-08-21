import React from "react";
import { Box, Grid, Tab, Tabs, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ClientLayout from "@/layout/client";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const data = [
  {
    courseId:'1', 
    courseName: 'Nhập môn cờ tướng', 
    lessons: [
      {lessonId: '1', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '2', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '3', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '4', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '5', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '6', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '7', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '8', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
    ]
  },
  {
    courseId:'2', 
    courseName: 'Nhập môn cờ tướng', 
    lessons: [
      {lessonId: '1', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '2', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '3', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '4', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '5', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '6', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '7', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '8', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
    ]
  },
  {
    courseId:'3', 
    courseName: 'Nhập môn cờ tướng', 
    lessons: [
      {lessonId: '1', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '2', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '3', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '4', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '5', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '6', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '7', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '8', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
    ]
  },
  {
    courseId:'4', 
    courseName: 'Nhập môn cờ tướng', 
    lessons: [
      {lessonId: '1', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '2', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '3', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '4', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '5', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '6', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '7', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '8', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
    ]
  },
  {
    courseId:'5', 
    courseName: 'Nhập môn cờ tướng', 
    lessons: [
      {lessonId: '1', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '2', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '3', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '4', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '5', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '6', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '7', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '8', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
    ]
  },
  {
    courseId:'6', 
    courseName: 'Nhập môn cờ tướng', 
    lessons: [
      {lessonId: '1', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '2', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '3', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '4', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '5', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '6', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '7', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
      {lessonId: '8', lessonName: 'Hướng dẫn học chơi cờ tướng cơ bản'},
    ]
  },
]

function a11yProps(index: string) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Course() {
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ClientLayout>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1, 
            borderColor: "#ccc",
            minHeight: "100vh",
            textAlign: "left",
            width: { lg: 400, md: 300, xs: 150 },
            pt: 14
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#cf2e2e",
            },
          }}
        >
          {data.map((item) => (
            <Tab 
              key={item.courseId} 
              label={item.courseName} 
              icon={
                <LibraryBooksOutlinedIcon
                  sx={{ fontSize: 25, display: {xs: 'none', md: 'inline'} }}
                />
              }
              iconPosition="start"
              {...a11yProps(item.courseId)}
              sx={{
                '&.Mui-selected': {
                  color: "#cf2e2e",
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                },
                fontSize: {xs: '1.4rem', md: '1.6rem'},
                fontWeight: 600,
                textTransform: 'unset',
              }}
            />
          ))}
        </Tabs>
        <Box sx={{ p: {xs: 1, md: 3}, width: '100%', backgroundColor: "transparent" }}>
          {data.map((item, index) => (
            value === index && (
              <div key={item.courseId}>
                <Typography 
                  variant="h3" 
                  sx={{
                    color:'#cf2e2e',
                    textTransform: 'uppercase',
                    fontSize: {md: '3rem', xs: '2rem'},
                    fontWeight: 600,
                    my: '4rem',
                    textAlign: 'center'
                  }}
                >{item.courseName}</Typography>
                <Grid container spacing={2} justifyContent='space-between'>
                  {item.lessons.map((lesson, index) => (
                    <Grid key={lesson.lessonId} item xs={12} md={6}>
                      <Button 
                        onClick={() => {router.push(`/lesson/${lesson.lessonId}`)}}
                        sx={{
                          textDecoration: 'none', 
                          display: 'flex', 
                          alignItems: 'center',
                          backgroundColor: '#fff',
                          borderRadius: '8px',
                          boxShadow: 3,
                          width: '100%',
                          minHeight: {xs: '6rem', md: '8rem'},
                          color: 'black',
                          px: 0,
                          textTransform: 'unset',
                        }}>
                        <Typography variant="h3"
                          sx={{
                            height: '100%',
                            width: {md: '8rem', xs: '6rem'},
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#cf2e2e',
                            borderRight: {md: '3px solid #cf2e2e', xs: 0}
                          }}
                        >
                          {index + 1}
                        </Typography>
                        <Typography variant="h5"
                          sx={{
                            px: {xs: '.4rem', md: '1.6rem'},
                            flex: 1,
                            textAlign: 'left',
                          }}
                        >
                          {lesson.lessonName}
                        </Typography>          
                      </Button>
                    </Grid> 
                  ))}
                </Grid>
              </div>
            )
          ))}
        </Box>
      </Box>
    </ClientLayout>
  );
}