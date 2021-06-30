import React from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (e) => setCount(count + 1);
  const decrementCount = (e) => setCount(count - 1);
  return <div>{count}</div>;
};

export default Counter;
