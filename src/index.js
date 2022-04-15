import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  const myName = 'やる夫';
  const words = 'こまけぇこたぁいいんだよ〜';
  const message = `<br />${myName}の口グセなのか？<br />${words}`;
  element.innerHTML = _.join(['webpack', '動いてるお〜'], ' ') + message;

  return element;
}

document.body.appendChild(component());