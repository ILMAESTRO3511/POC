import Image from "next/image";
import styles from "../page.module.css";
import Navbar from "../components/Navbar"
import foto from "../assets/foto.png"
export default function Home() {
 return (
      <div>
        <div className={styles.bg_image}></div>
        <div className={styles.pageAbout}>
        <div className={styles.container}>
          <h1 className={styles.title_prova}>Vantaggi nell'suo utilizzo</h1>
          <p className={styles.text}>L'intelligenza artificiale (IA) automatizza attività ripetitive, ottimizza costi e operazioni, e personalizza l'esperienza utente, migliorando la produttività e la soddisfazione dei clienti. Facilita l'analisi dei dati per decisioni informate, aumenta la sicurezza, favorisce l'inclusione e supporta la creatività. Con assistenti virtuali 24/7, l'IA migliora il servizio clienti, rendendola una risorsa strategica da usare in modo responsabile</p>
        </div>
        <div>
            <Image className={styles.imageContainer}
              src={foto}
              alt="Logo" 
              width={1000}
              height={500}
            />
        </div>
         </div>
      </div>
    );
  }