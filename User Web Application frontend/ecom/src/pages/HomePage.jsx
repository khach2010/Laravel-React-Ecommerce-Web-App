import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collections from '../components/home/Collections'
import FeatureProducts from '../components/home/FeatureProducts'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home page here</h1>
        <FeatureProducts />
        <Collections />
        <NewArrival />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage