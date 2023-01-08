import Error404 from 'containers/errors/Error404';
import store from './store';
import { Provider } from 'react-redux';
import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import Contact from 'containers/pages/Contact';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers';
import Blog from 'containers/pages/Blog';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path='*' element={<Error404 />} />

          {/*Home Display*/}
          <Route path='/' element={<Home />} />
          <Route path='/casos' element={<Cases />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/contactos' element={<Contact />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/carreras' element={<Careers />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
