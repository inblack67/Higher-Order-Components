import React from 'react';
import withCounter from './HOC/withCounter';

const Home = ({ count, incrementCount, decrementCount }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default withCounter(Home);
