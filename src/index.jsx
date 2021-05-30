import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke';
import './style.css';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
