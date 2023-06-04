import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from "counterMfe/Counter"
import Home from './Home';





function Container1() {
  return (
    <div>
      <h1>Container App</h1>
      <Router>
        <nav>
            <Link to="/">Home</Link><br/>
            <Link to="/counter">Counter</Link>
        </nav>
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/counter' element={<Counter/>}></Route>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Container1;
