import Head from 'next/head';
import styles from './page7.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Page8 = () => {
    const router = useRouter();
    const { result } = router.query;
  
    return (
      <div className={styles.container}>
        <Head>
          <title>City-Scape Flights - Result</title>
          <meta name="description" content="Your flight result" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main} style={{ marginTop: "30px" }}>
          <Image
            src="/plane.png"
            alt="Plane"
            width={667}
            height={190}
            className={styles.planeImage}
          />
           <h1 className={styles.title}>City-Scape Flights</h1>
  
    
          <p className={styles.result} style={{ whiteSpace: "pre-line" }}>{result}</p>
          
          {/* ... rest of the page8 content */}
          <button>Add To Calendar</button>
        </main>
      </div>
    );
  };
  
export default Page8;