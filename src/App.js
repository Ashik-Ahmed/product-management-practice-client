import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/add' element={<AddProduct></AddProduct>}></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
