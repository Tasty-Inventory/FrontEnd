import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/GlobalStyles';
import Inventory from './pages/Inventory';
import MenuList from './pages/menu/MenuList';
import Settings from './pages/Settings';
import EmployeeList from './pages/employee/EmployeeList';
import AddEmployee from './pages/employee/AddEmployee';
import AddEmployeeEdit from './pages/employee/AddEmployeeEdit';
import SchedulePage from './pages/employee/SchedulePage';
import SalaryList from './pages/employee/SalaryList';
import AddSalary from './pages/employee/AddSalary';
import AddSalaryEdit from './pages/employee/AddSalaryEdit';
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
import InventoryList from './pages/inventory/InventoryList';

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
            <Route path="/employee/add" element={<AddEmployee />} />
            <Route path="/employee/:id" element={<AddEmployeeEdit />} />
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/schedule" element={<SchedulePage />} />{' '}
            {/* Updated route for SchedulePage */}
            <Route path="/salary" element={<SalaryList />} />
            <Route path="/salary/add" element={<AddSalary />} />
            <Route path="/salary/:id" element={<AddSalaryEdit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginnext" element={<LoginNext />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpw" element={<FindPw />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addmenu" element={<AddMenu />} />
            <Route path="/addinventory" element={<AddInventory />} />
            <Route path="/inventoryList" element={<InventoryList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
