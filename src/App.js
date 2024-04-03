import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
