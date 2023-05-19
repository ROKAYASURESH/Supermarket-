
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Details from './Details';
import PopularProduct from './PopularProduct';
import Shops from './Shops';
import Furniture from './Furniture';
import DataCollection from './DataCollection';
import FashionCloths from './FashionCloths';
import FurnitureMain from './FurnitureMain';
import DataDetails from './DataDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/Shops/:id" element={<Shops />} />
        <Route path="/PopularProduct/:id" element={<PopularProduct />} />
        <Route path="/furniture/:id" element={<Furniture/>}/>
        <Route path="/DataCollection" element={<DataCollection/>}/>
        <Route path="/fashioncloths" element={<FashionCloths/>}/>
        <Route path='/FurnitureMain'element={<FurnitureMain/>}/>
        <Route path='/DataDetails/:id'element={<DataDetails/>}/>
      
       </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
