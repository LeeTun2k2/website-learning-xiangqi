import React from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ClientLayout from "@/layout/client";
import YouTubeVideo from "@/components/YoutubeVideo";
import XiangqiBoardGame from "@/components/XiangqiBoardGame";

const data = [
  {
    lessonId:'1', 
    lessonName: 'Song Xe Thác – Sát Pháp Cờ Tướng – 双车错', 
    paragraphs: [
      {
        paragraphId: '1', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: 'Cảm ơn vì bạn đã đồng hành cùng webcotuong.com trong thời gian qua và quan tâm tới bài kêu gọi này. Nếu như bạn cảm thấy hài lòng về những giá trị mà webcotuong.com mang lại, bạn có thể khích lệ đội ngũ biên tập bằng cách ủng hộ theo thông tin bên dưới nhé. Đó có thể là ly cafe buổi sáng kèm lời nhắn “yêu thương”, nó sẽ giúp mình và team có thêm động lực và cảm hứng để tiếp tục phục vụ cộng đồng. Xin chân thành cảm ơn!',
        paragraphIFrame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_zzLqWCGGck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        // paragraphIFrame: null,
        paragraphPGN: `
        [FEN "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w - - 0 1"]
        
        P7+1 P7+1 C2=3 C8=5 P7+1 *
        `,
      },
      {
        paragraphId: '2', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: '',
        paragraphIFrame: null,
        paragraphPGN: '',
      },
      {
        paragraphId: '3', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: '',
        paragraphIFrame: null,
        paragraphPGN: '',
      },
    ]
  },
  {
    lessonId:'2', 
    lessonName: 'Song Xe Thác – Sát Pháp Cờ Tướng – 双车错', 
    paragraphs: [
      {
        paragraphId: '4', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: 'Cảm ơn vì bạn đã đồng hành cùng webcotuong.com trong thời gian qua và quan tâm tới bài kêu gọi này. Nếu như bạn cảm thấy hài lòng về những giá trị mà webcotuong.com mang lại, bạn có thể khích lệ đội ngũ biên tập bằng cách ủng hộ theo thông tin bên dưới nhé. Đó có thể là ly cafe buổi sáng kèm lời nhắn “yêu thương”, nó sẽ giúp mình và team có thêm động lực và cảm hứng để tiếp tục phục vụ cộng đồng. Xin chân thành cảm ơn!',
        paragraphIFrame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_zzLqWCGGck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        // paragraphIFrame: null,
        paragraphPGN: `
        ['[Game "Chinese Chess"]',
        '[Event "1982年全国赛"]',
        '[Date "1982.12.11"]',
        '[Red "柳大华"]',
        '[Black "杨官璘"]',
        '[Result "1/2-1/2"]',
        '[Format "ICCS"]',
        '',
        '1. b2e2 b9c7 2. b0c2 a9b9 3. a0b0 h9g7',
        '4. g3g4 c6c5 5. b0b6 b7a7 6. b6c6 a7a8',
        '7. h0g2 f9e8 8. h2i2 a8c8 9. c6d6 c7b5',
        '10. i0h0 i9h9 11. c2e1 c5c4 12. d6d5 c8c3',
        '13. h0h6 b5d4 14. e2c2 b9b7 15. c2c4 b7d7',
        '16. g2f4 h7i7 17. h6g6 h9h2 18. g4g5 c3b3',
        '19. g5f5 b3b0 20. e1g2 d4f5 21. f0e1 h2h6',
        '22. d5c5 c9a7 23. g6h6 a7c5 24. h6h3 b0b3',
        '25. e3e4 b3b4 26. g0e2 b4e4 27. i2i1 i7i8',
        '28. i1g1 i8g8 29. c4c2 d7f7 30. c2b2 c5a7',
        '31. h3c3 f7b7 32. b2c2 b7f7 33. c2b2 f7b7',
        '34. b2a2 b7f7 35. a2a6 f5h4 36. a6b6 g9e7',
        '37. g1f1 h4f3 38. b6b3 f3g1 39. e0f0 g7f5',
        '40. c3e3 e6e5 41. b3b1 f7f6 42. e3g3 g8f8',
        '43. f1f2 g1i0 44. g3h3 f8f9 45. b1b5 i0g1',
        '46. h3h5 a7c5 47. b5e5 e4b4 48. a3a4 b4b3',
        '49. f2f3 b3b2 50. e1d2 b2b0 51. f0f1 b0d0',
        '52. a4a5 d0g0 53. f1e1 g0g2 54. f3f5 f9f5',
        '55. f4g2 f6b6 56. e1f1 f5f9 57. h5h1 b6e6',
        '58. e5d5 e8f7 59. f1e1 e6b6 60. a5b5 b6a6',
        '61. b5a5 a6b6 62. a5b5 b6a6 63. b5a5 1/2-1/2'];`,
      },
      {
        paragraphId: '5', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: '',
        paragraphIFrame: null,
        paragraphPGN: '',
      },
      {
        paragraphId: '6', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: '',
        paragraphIFrame: null,
        paragraphPGN: '',
      },
    ]
  },
  {
    lessonId:'3', 
    lessonName: 'Song Xe Thác – Sát Pháp Cờ Tướng – 双车错', 
    paragraphs: [
      {
        paragraphId: '7', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: 'Cảm ơn vì bạn đã đồng hành cùng webcotuong.com trong thời gian qua và quan tâm tới bài kêu gọi này. Nếu như bạn cảm thấy hài lòng về những giá trị mà webcotuong.com mang lại, bạn có thể khích lệ đội ngũ biên tập bằng cách ủng hộ theo thông tin bên dưới nhé. Đó có thể là ly cafe buổi sáng kèm lời nhắn “yêu thương”, nó sẽ giúp mình và team có thêm động lực và cảm hứng để tiếp tục phục vụ cộng đồng. Xin chân thành cảm ơn!',
        paragraphIFrame: null,
        paragraphPGN: `
        [Event "?"]
        [Site "https://www.pychess.org/analysis/xiangqi"]
        [Date "2023.08.24"]
        [White "?"]
        [Black "?"]
        [Result "*"]
        [Variant "Xiangqi"]
        [FEN "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w - - 0 1"]
        [SetUp "1"]
        
        1.Che3 Che8 2.Hg3 Hg8 3.Rh1 Ri9 4.Rh9 Rxh9 5.Pg5 Rh2 6.Hc3 Rf2 7.Pg6 Pxg6 8.Hf5 Hf6 9.Hd6 Hg4 10.Hxe8 Hxe3 11.Hg9+ Ke9 12.Pc5 Hc2# *`
      },
      {
        paragraphId: '8', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: '',
        paragraphIFrame: null,
        paragraphPGN: '',
      },
      {
        paragraphId: '9', 
        paragraphTitle: 'Hướng dẫn học chơi cờ tướng cơ bản',
        paragraphDescription: '',
        paragraphIFrame: null,
        paragraphPGN: '',
      },
    ]
  },
]

function a11yProps(index: string) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Lesson() {
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ClientLayout>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        {/* Left Tab */}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "#ccc",
            height: "100vh",
            textAlign: "left",
            width: { lg: 400, md: 300, xs: 150 },
            pt: 14,
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#cf2e2e",
            },
          }}
        >
          {data.map((item) => (
            <Tab 
              key={item.lessonId} 
              label={item.lessonName} 
              {...a11yProps(item.lessonId)}
              sx={{
                '&.Mui-selected': {
                  color: "#cf2e2e",
                  bgcolor: "#fff",
                  borderBottom: "1px solid #ccc",
                },
                fontSize: '1.6rem',
                fontWeight: 600,
                textTransform: 'unset',
              }}
            />
          ))}
        </Tabs>
        {/* End Left Tab */}

        {/* Right Tab */}
        <Box sx={{ p: 3, width: '100%', backgroundColor: "transparent" }}>
          {data.map((item, index) => (
            value === index && (
              <div key={item.lessonId}>
                {/* Header */}
                <Typography 
                  variant="h3" 
                  sx={{
                    color:'#cf2e2e',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    my: '4rem',
                    textAlign: 'center'
                  }}
                >
                  {item.lessonName}
                </Typography>
                {/* End Header */}
                {/* Content */}
                {item.paragraphs.map((paragraph, index) => (
                  <Grid 
                    key={paragraph.paragraphId} 
                    container 
                    justifyContent='space-between'
                    py={4}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {index +  1}. {paragraph.paragraphTitle}
                    </Typography>
                    <Typography 
                      variant="inherit" 
                      sx={{
                        my: '4rem',
                        fontSize: '1.8rem',
                        textAlign: 'justify',
                        lineHeight: 1.5,
                        textIndent: 50,
                      }}
                    >
                      {paragraph.paragraphDescription}
                    </Typography>

                    {/* Youtube  */}
                    {(
                      paragraph.paragraphIFrame &&
                      <Grid 
                        container
                        justifyContent='center'
                      >
                       <YouTubeVideo videoEmbedString={paragraph.paragraphIFrame}/>
                      </Grid>
                    )}
                    {/* End Youtube */}

                    {/* Chess board xianqi */}
                    {(
                      paragraph.paragraphPGN &&
                      <Grid 
                        container
                        justifyContent='center'
                      >
                        <XiangqiBoardGame PGN_string={paragraph.paragraphPGN} />
                      </Grid>
                    )}
                    {/* End Chess board xianqi */}
                  </Grid>
                ))}
                {/* End Content */}
              </div>
            )
          ))}
        </Box>
        {/* End Right Tab */}

      </Box>
    </ClientLayout>
  );
}