import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from '@/pages/home'
import styles from './page.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Home />
      <Footer />
    </main>
  )
}
