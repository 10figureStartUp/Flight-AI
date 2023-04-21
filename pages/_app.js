// _app.js
import '../pages/globals.css';
import Page3 from '../pages/page3';
import Page3Container from '../pages/Page3Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component === Page3 && <Page3Container />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
