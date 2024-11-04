import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "../components/Navbar"
import ai from "../assets/ai.png"

export default function Home() {
    return (
      <div>
        <div className={styles.bg_image}></div>
        <div className={styles.pageAbout}>
        <div className={styles.container}>
          <h1 className={styles.title_prova}>Che cos'è una AI?</h1>
          <p className={styles.text}>Un AI (Artificial Intelligence) è un campo dell'informatica che si concentra sulla creazione di sistemi e macchine in grado di svolgere compiti che richiedono intelligenza umana. Questi compiti includono cose come il riconoscimento di immagini, la comprensione del linguaggio naturale, la risoluzione di problemi complessi, la pianificazione, e l'apprendimento dai dati.</p>
          </div>
          <div>
            <Image className={styles.imageContainer}
              src={ai}
              alt="Logo" 
              width={500}
              height={500}
            />
        </div>
        </div>
        </div>
    );
  }