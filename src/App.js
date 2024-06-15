import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/GlobalStyles';
import Inventory from './pages/Inventory';
import MenuList from './pages/menu/MenuList';
import Settings from './pages/Settings';
import Staff from './pages/Staff';
import Login from './pages/user/Login';
import LoginNext from './pages/user/LoginNext';
import FindId from './pages/user/FindId';
import FindPw from './pages/user/FindPw';
import Signup from './pages/user/Signup';
import { AuthProvider } from './utils/AuthContext';
import Header from './components/layout/Header';
import AddMenu from './pages/menu/AddMenu';
import AddInventory from './pages/menu/AddInventory';
import InventoryDetail from './pages/menu/InventoryDetail';
import MenuDetail from './pages/menu/MenuDetail';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<InventoryDetail />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/menulist" element={<MenuList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginnext" element={<LoginNext />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpw" element={<FindPw />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addmenu" element={<AddMenu />} />
            <Route path="/addinventory" element={<AddInventory />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
