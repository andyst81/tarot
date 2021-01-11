import Header from './Header';
import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <title>One Card Tarot</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
