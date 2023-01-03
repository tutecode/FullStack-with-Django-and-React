import Error404 from 'containers/errors/Error404';
import store from './store';
import { Provider } from 'react-redux';
import Home from 'containers/pages/Home';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path='*' element={<Error404 />} />

          {/*Home Display*/}
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
