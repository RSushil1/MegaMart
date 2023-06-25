import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/layout/layout';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProducts from './pages/admin/CreateProducts';
import Users from './pages/admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import Wishlist from './pages/user/Wishlist';

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route  path='/' element={<HomePage/>} />
        <Route path='/dashboard' element={<PrivateRoute/>} >
        <Route  path='user' element={<Dashboard/>} />
        <Route  path='user/profile' element={<Profile/>} />
        <Route  path='user/orders' element={<Orders/>} />
        <Route  path='user/wishlist' element={<Wishlist/>} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>} >
        <Route  path='admin' element={<AdminDashboard/>} />
        <Route  path='admin/create-category' element={<CreateCategory/>} />
        <Route  path='admin/create-products' element={<CreateProducts/>} />
        <Route  path='admin/users' element={<Users/>} />
        </Route>
        <Route  path='/register' element={<Register/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contacts' element={<Contacts/>} />
        <Route  path='/policy' element={<Policy/>} />
        <Route  path='*' element={<PageNotFound/>} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
