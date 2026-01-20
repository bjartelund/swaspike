import { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api/helloworld')
      .then((res) => res.text())
      .then((data) => setText(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <h1>{text}</h1>
    </div>
  );
};

export default Home;
