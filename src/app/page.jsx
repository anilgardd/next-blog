import Link from "next/link";
import styles from "./homepage.module.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardlist/CardList";
import Menu from "./components/menu/Menu";
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className={styles.content}>
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
}
