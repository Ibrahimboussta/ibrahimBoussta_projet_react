
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Header } from './layouts/header';
import { ContactSec } from './pages/Contact/components/contactSec';
import { ShopSec } from './pages/Shop/components/shopSec';
import { Footer } from './layouts/footer';
import Products, { Productss } from './pages/Products/Products';
import { Login } from './pages/Login/Login';
import Signup from './pages/Sign-up/Signup';
import Cart from './pages/Cart/Cart';
function App() {
  return (

    <MyProvider>
      <Header />

      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopSec />} />
        <Route path='/product/:name' element={<Productss />} />
        <Route path='/contact' element={<ContactSec />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes >

      <Footer/>
    </MyProvider>

  );
}
export default App;
