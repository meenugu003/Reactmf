import React, {Suspense} from 'react';

const CounterComp = React.lazy(() => import("counterMfe/Counter"));
const ButtonComp = React.lazy(() => import("counterMfe/ButtonComp"));
import ErrorBoundary from '../shared/ErrorBoundary';

function Counter() {
  return (
    <div>
      <p>About Counter Data</p>
      <Suspense fallback={<div>Loading Counter...</div>}>
        <ErrorBoundary>
        <CounterComp/>
        <ButtonComp/>
        </ErrorBoundary>
      </Suspense>
      
    </div>
  );
}

export default Counter;
