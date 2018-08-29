import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
//import OverviewPage from './pages/Overview'; 
import Home from './pages/HomePage';
import Router from './components/Router';



const NotFound = () => <h2>Error! 404</h2>


const routes = {
  '/': Home,
  '/contact': ContactPage,
  '/about': AboutPage,
  '/portfolio': PortfolioPage,
  'error': NotFound,
  /*'/overview': OverviewPage,
  */
}

class App extends Component {
  constructor() {
    super()
    this.state = { in: true }
  }


  render() {
    const {

      location,
    } = this.props

    return (
      <div className='App'>
        <Navigation />
        <hr />
        <Router location={location} routes={routes} />
        <div class="content-container">
          <div class="blur"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({





  location: state.oldLocation.currentLocation,
  oldlocation: state.oldLocation.previousLocation,
})

export default connect(mapStateToProps)(App);
