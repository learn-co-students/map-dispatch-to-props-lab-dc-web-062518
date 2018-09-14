import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}, {restaurant.location}</li>);

console.log('resturant prop ', this.props.restaurants);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  // debugger
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
