import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const CounterComp = React.lazy(() => import("counterMfe/Counter"));
import ErrorBoundary from './shared/ErrorBoundary';

import Home from './Home';

function Container3() {
  return (
    <div>
      <h1>Container App</h1>
      <Router>
        <nav>
            <Link to="/">Home</Link><br/>
            <Link to="/counter">Counter</Link>
        </nav>
        <div>
        <Suspense fallback={<div>Loading Counter...</div>}>
            <ErrorBoundary>
            <Routes>
            
                <Route path='/' element={<Home/>}></Route>
                <Route path='/counter' element={<CounterComp/>}></Route>
            
            </Routes>
            </ErrorBoundary>
            </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default Container3;
