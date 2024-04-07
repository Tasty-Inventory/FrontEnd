import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/GlobalStyles';
import Inventory from './pages/Inventory';
import MenuList from './pages/MenuList';
import Settings from './pages/Settings';
import Staff from './pages/Staff';
import Login from './pages/user/Login';
import FindId from './pages/user/FindId';
import FindPw from './pages/user/FindPw';
import Register from './pages/user/Register';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/menulist" element={<MenuList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpw" element={<FindPw />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
