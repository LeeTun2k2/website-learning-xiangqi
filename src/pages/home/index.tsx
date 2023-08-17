import { Grid } from '@mui/material';
import FeaturedArticles from "@/components/FeaturedArticles";
import ListArticles from '@/components/ListArticles';
import Donate from '@/components/Donate';

export default function Home() {
  return (
    <div className="home">
      <Grid container spacing={2} padding={{xs: "1.6rem 6rem 0", md: "3.2rem 15rem 0"}}>
        <Grid item xs={12} md={8}>
          <FeaturedArticles title={dataNguoiMoiNenXem.title} data={dataNguoiMoiNenXem.data}/>
          <FeaturedArticles title={dataBaiDangGanDay.title} data={dataBaiDangGanDay.data}/>
        </Grid> 
        <Grid item xs={12} md={4}>
          <ListArticles title={dataTaiNguyen.title} data={dataTaiNguyen.data}/>
          <ListArticles title={dataTaiNguyen.title} data={dataTaiNguyen.data}/>
          <Donate/>
        </Grid>
      </Grid>
    </div>
  )
}

const dataNguoiMoiNenXem = {
  title: "NGƯỜI MỚI NÊN XEM",
  data: [
      {
          id: "1",
          title: "Làm sao để chơi Cờ tướng giỏi ?",
          image: "https://webcotuong.com/wp-content/uploads/2021/09/phan-cung-ma.jpg",
          href: "", 
      },
      {
          id: "2",
          title: "Hướng dẫn chơi Cờ tướng – Chi tiết và Dễ hiểu nhất",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "3",
          title: "Hiểu Cách Ghi Biên Bản Cờ Tướng Trong 5 Phút",
          image: "https://webcotuong.com/wp-content/uploads/2021/09/phan-cung-ma.jpg",
          href: "", 
      },
      {
          id: "4",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/09/phan-cung-ma.jpg",
          href: "", 
      },
      {
          id: "5",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/09/phan-cung-ma.jpg",
          href: "", 
      },
      {
          id: "6",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/09/phan-cung-ma.jpg",
          href: "", 
      },
  ]
}

const dataBaiDangGanDay = {
  title: "BÀI ĐĂNG GẦN ĐÂY",
  data: [
      {
          id: "1",
          title: "Hứa Ngân Xuyên đã tuyên bố giải nghệ ?",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "2",
          title: "Vương Thiên Nhất – Từ “Ngoại tinh lai khách” đến “Vũ hóa...",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "3",
          title: "Hiểu Cách Ghi Biên Bản Cờ Tướng Trong 5 Phút",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "4",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "5",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "6",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
  ]
}

const dataTaiNguyen = {
  title: "BÀI ĐĂNG GẦN ĐÂY",
  data: [
      {
          id: "1",
          title: "Hứa Ngân Xuyên đã tuyên bố giải nghệ ?",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "2",
          title: "Vương Thiên Nhất – Từ “Ngoại tinh lai khách” đến “Vũ hóa...",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "3",
          title: "Hiểu Cách Ghi Biên Bản Cờ Tướng Trong 5 Phút",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
      {
          id: "4",
          title: "Người mới nên xem",
          image: "https://webcotuong.com/wp-content/uploads/2021/12/ngan-xuyen-ky-lo.jpg",
          href: "", 
      },
  ]
}
  