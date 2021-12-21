import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './routes/blog'
import Contact from './routes/contact'
import Home from './routes/home'
import NotFound from './routes/NotFound';
import App from './App';
import Post from './routes/post';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blog/:id' element={<Post />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


