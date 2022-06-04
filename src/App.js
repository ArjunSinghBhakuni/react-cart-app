 
import './App.css';

import {Routes,Route} from 'react-router-dom';
import { Navbar } from './Component/Navbar';
 
import { About } from './Pages/About';
import { Faq } from './Pages/Faq';
import {Contact} from './Pages/Contact'
import { Home } from './Pages/Home';
import {Men} from './Pages/Men'
import {Women} from './Pages/Women'
import {Kids} from './Pages/Kids'
import { Product } from './Pages/Product';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} /> 
       
         <Route path='men' element={<Men/>}/>
         <Route path ='women/' element={<Women/>}>
           <Route path='women/:id'  element={<Product/>}/>
         </Route>
         <Route path='kids' element={<Kids/>}/>
     
       <Route path= 'about' element={<About/>} /> 
       <Route path='faq' element={<Faq/>}/>
       <Route path= 'contact' element={<Contact/>}/> 
       
     </Routes>

    </div>
  );
}

export default App;
