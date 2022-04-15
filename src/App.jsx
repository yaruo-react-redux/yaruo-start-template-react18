import React from 'react';
import _ from 'lodash';


const App = () => {
  const myName = 'やる夫';
  const words = 'こまけぇこたぁいいんだよ〜';
  return (
    <div>
      {_.join(['webpack', '動いてるお〜'], ' ')}
      <br />
      {myName}の口グセなのか？
      <br />
      {words}
    </div>
  );
};

export default App;