
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body"
import store from "./utils/store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsPage from './components/SearchResultsPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/results" element={<SearchResultsPage />} />
              <Route path="/feed" element={<SearchResultsPage />} />
            </Route>
           
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
