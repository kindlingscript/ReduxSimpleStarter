import React, { Component } from 'react';

/*** Functional component ***/
// const SearchBar = () => {
//   return <input />;
// };

/*** Class-based component using an ES6 class ***/
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        <p>Value of the input: {this.state.term}</p>
      </div>
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
