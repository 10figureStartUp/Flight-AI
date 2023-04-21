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

      <main className={styles.main} style={{ marginTop: "-230px" }}>
        <Image
          src="/plane.png"
          alt="Plane"
          width={667}
          height={190}
          className={styles.planeImage}
        />
        <h1 className={styles.title}>City-Scape Flights</h1>

        <h2 className={styles.subTitle}>Your Itinerary</h2>

        {result && <p>{result}</p>}
        
        {/* ... rest of the page8 content */}
      </main>
    </div>
  );
};

export default Page8;
