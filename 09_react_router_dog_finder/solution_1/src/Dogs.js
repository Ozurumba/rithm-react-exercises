import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dog from './Dog';
import whiskeyPic from './images/whiskey.jpg';
import hazelPic from './images/hazel.jpg';
import tubbyPic from './images/tubby.jpg';

class Dogs extends Component {
  state = {
    dogs: [
      {
        name: 'whiskey',
        id: 0,
        image: whiskeyPic,
        age: 4,
        facts: [
          'Whiskey loves eating popcorn',
          'Whiskey is a terrible guard dog',
          'Whiskey wants to cuddle with you'
        ]
      },
      {
        name: 'hazel',
        id: 1,
        age: 0,
        image: hazelPic,
        facts: [
          'Hazel has a lot of energy',
          'Hazel is highly intelligent',
          'Hazel loves people more than dogs'
        ]
      },
      {
        name: 'tubby',
        id: 2,
        age: 4,
        image: tubbyPic,
        facts: [
          'Tubby is really stupid',
          'Tubby does not like walks',
          'Angelina hates Tubby'
        ]
      }
    ]
  };

  render() {
    // if this component was rendered by the route /dogs/:name
    let currentDog;
    if (this.props.match.params.name) {
      currentDog = this.props.match.params.name;
    }
    return this.state.dogs.map(dog => (
      <Dog
        age={dog.age}
        currentDog={currentDog}
        facts={dog.facts}
        image={dog.image}
        key={dog.id}
        name={dog.name}
      />
    ));
  }
}

export default Dogs;
