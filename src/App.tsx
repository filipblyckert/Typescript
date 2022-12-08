import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductsDetailView';
import ProductsView from './views/ProductsView';
import { ProductContext } from './contexts/contexts'
import { ProductItem } from './models/ProductsModel';



function App() {


  



  return (
    <BrowserRouter>

   <ProductContext.Provider value={products}>

      <Routes>
        <Route path='/' element={<HomeView/>} />

        <Route path='/contacts' element={<ContactsView/>} /> 
        <Route path='/products' element={<ProductsView/>} />
        <Route path='/*' element={<NotFoundView/>} />
        <Route path='/products/:name' element={<ProductDetailsView/>} />

        </Routes>


   </ProductContext.Provider>

    </ BrowserRouter>
   
  );
}

export default App;
