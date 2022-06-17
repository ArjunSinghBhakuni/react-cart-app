 
 

import {Routes,Route} from 'react-router-dom';
import { Navbar } from './Component/Navbar';
import  Footer  from './Component/Footer';
import { About } from './Pages/About';
import { Faq } from './Pages/Faq';
import {Contact} from './Pages/Contact'
import { Home } from './Pages/Home';
import {Men} from './Pages/Men'
import {Women} from './Pages/Women'
import {Kids} from './Pages/Kids'
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import Login from './Pages/Login';
import Account from './Pages/Account';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} /> 
       
         <Route path='men' element={<Men/>}/>
         <Route path='men/:id'  element={<Product/>}/>
         <Route path ='women/' element={<Women/>}/>
           <Route path='women/:id'  element={<Product/>}/>
       
         <Route path='kids' element={<Kids/>}/>
         <Route path='kids/:id'  element={<Product/>}/>
     
       <Route path= 'account' element={<Account/>} /> 
       <Route path='login' element={<Login/>}/>
       <Route path= 'contact' element={<Contact/>}/> 
       <Route path= 'addtocart' element={<Cart/>}/> 
       
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
