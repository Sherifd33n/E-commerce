import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Collection from "./Screens/Collection";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Search from "./Screens/Search";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Cart from "./Screens/Cart";
import SingleProduct from "./Screens/SingleProduct";
import ForgotPassword from "./Screens/ForgotPassword";
import CartTab from "./Components/CartTab";

function App() {
  return (
    <BrowserRouter>
      <div className="App px-4 md:px-16 lg:px-24">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </div>
      <CartTab />
    </BrowserRouter>
  );
}

export default App;
