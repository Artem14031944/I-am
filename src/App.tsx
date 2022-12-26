import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Works from './pages/Works/Works';
import './App.css';

const App:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/works' element={<Works/>}/>
      </Route>
    </Routes>
  );
};

export default App;
