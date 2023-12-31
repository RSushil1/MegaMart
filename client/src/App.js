import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import Products from "./pages/admin/Products";
import CreateProduct from "./pages/admin/CreateProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Dashboard from './pages/user/Dashboard';
import AdminOrders from './pages/admin/AdminOrders';
import ForgotPasssword from "./pages/auth/ForgotPasssword";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard/>} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<Orders />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-products" element={<CreateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
            <Route path="admin/orders" element={<AdminOrders />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPasssword/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
