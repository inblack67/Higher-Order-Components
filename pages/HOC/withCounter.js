import React, { useState } from 'react';

const withCounter = (HomeComponent) => {
  const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = (e) => setCount(count + 1);
    const decrementCount = (e) => setCount(count - 1);
    return (
      <HomeComponent
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    );
  };
  return Counter;
};

export default withCounter;
