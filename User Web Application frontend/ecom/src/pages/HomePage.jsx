import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collections from '../components/home/Collections'
import FeatureProducts from '../components/home/FeatureProducts'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeTop />
        <FeatureProducts />
        <Collections />
        <NewArrival />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage