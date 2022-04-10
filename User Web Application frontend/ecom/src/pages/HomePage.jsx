import React, { Component, Fragment } from 'react'
import Collections from '../components/home/Collections'
import FeatureProducts from '../components/home/FeatureProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home page here</h1>
        <FeatureProducts />
        <Collections />
      </Fragment>
    )
  }
}

export default HomePage