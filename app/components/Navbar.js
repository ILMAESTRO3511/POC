import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png"
export default function Home() {
  return (
    <div className={styles.navbar}>
       <a href="/">
        <Image
          src={logo}
          alt="Logo" 
          width={40}
          height={40}
        />
       </a>
      <a href="/about">About</a>       
      <a href="/vantaggi">Vantaggi</a>
     
    </div>
  );
}

