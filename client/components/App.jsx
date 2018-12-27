import React from 'react';
import Component from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: ''
    }
    this.onSubmitNameChange = this.onSubmitNameChange.bind(this);  
  }
  onSubmitNameChange(event) {
    this.setState({
      [ event.target.name]: event.target.value
    })
  }
  render() {
    const {first, last} = this.state;
    return (
      <div>
        First: <input name="first" type="text" onChange={this.onSubmitNameChange} />
        Last: <input name="last" type="text" onChange={this.onSubmitNameChange} />
        Hello, {first} {last} !
      </div>
    );
  }  
}


export default App;