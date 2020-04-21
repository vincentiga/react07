import React from 'react';
import axios from 'axios'
import Simpsons from './components/Simpsons';

const oneSimpsons = {
  character: 'Milhouse Van Houten',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
  quote: "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: oneSimpsons
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }
  getSimpsons() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data) 
      // Use this data to update the state
      .then(data => {           
        this.setState({
          props: data[0], 
        });
    });
  }
  render() {
    return (
      <div className="App">
        <Simpsons props={this.state.props} />
        <button type="button" onClick={this.getSimpsons}>PRESS</button>
      </div>
    );
  }
}

export default App;
