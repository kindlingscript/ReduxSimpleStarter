import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

import API_KEY from './key';

/****
* Create a new component - it should produce some HTML.
****/
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

/****
* Take the component's generated HTML & put it on the page, aka in the DOM.
****/
ReactDOM.render(<App />, document.querySelector('.container'));
