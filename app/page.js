import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div>
      <div className={styles.bg_image}></div>
      <div className={styles.page}>
      <title>Benvenuto</title>
      <h1 className={styles.title}>LogicMasterAI</h1>
      <p>Scopri i vantaggi</p>
      </div>
    </div>
  );
}
