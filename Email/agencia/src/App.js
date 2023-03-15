//import { Helmet, HelmetProvider } from 'react-helmet-async';
//
//
//import Error404 from 'containers/errors/Error404';
//import store from './store';
//import { Provider } from 'react-redux';
//import Home from 'containers/pages/Home';
//import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
//import Cases from 'containers/pages/Cases';
//import Services from 'containers/pages/Services';
//import Contact from 'containers/pages/Contact';
//import About from 'containers/pages/About';
//import Careers from 'containers/pages/Careers';
//import Blog from 'containers/pages/Blog';
//
//
//function App() {
//  return (
//    <HelmetProvider>
//      <Helmet>
//        <title>Murkiva | Software Agency</title>
//        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
//        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
//        <meta name="robots" content='all' />
//        <link rel="canonical" href="https://www.murkiva.com/" />
//        <meta name="author" content='Murkiva' />
//        <meta name="publisher" content='Murkiva' />
//
//        {/* Social Media Tags */}
//        <meta property="og:title" content='Murkiva | Software Agency' />
//        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
//        <meta property="og:url" content="https://www.murkiva.com/" />
//        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
//
//        <meta name="twitter:title" content='Murkiva | Software Agency' />
//        <meta
//          name="twitter:description"
//          content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
//        />
//        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
//        <meta name="twitter:card" content="summary_large_image" />
//      </Helmet>
//      <Provider store={store}>
//        <Router>
//          <Routes>
//            {/*Error Display*/}
//            <Route path='*' element={<Error404 />} />
//
//            {/*Home Display*/}
//            <Route path='/' element={<Home />} />
//            <Route path='/casos' element={<Cases />} />
//            <Route path='/blog' element={<Blog />} />
//            <Route path='/servicios' element={<Services />} />
//            <Route path='/contactos' element={<Contact />} />
//            <Route path='/nosotros' element={<About />} />
//            <Route path='/carreras' element={<Careers />} />
//
//          </Routes>
//        </Router>
//      </Provider>
//    </HelmetProvider>
//  );
//}
//
//export default App;


import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import AnimatedRoutes from 'Routes';

function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Murkiva | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.murkiva.com/" />
        <meta name="author" content='Murkiva' />
        <meta name="publisher" content='Murkiva' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Murkiva | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.murkiva.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Murkiva | Software Agency' />
        <meta
            name="twitter:description"
            content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
            <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;