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
import PageTransition from 'react-router-page-transition';


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
        <PageTransition>
          <Router location={location} routes={routes} />
          <div class="content-container">
            <div class="blur"></div>
          </div>
        </PageTransition>
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

export default class ListPage extends React.Component {
  render() {
    return (
      <div id="list-page" class="transition-item">
        <Router location={location} routes={routes} />
        <div class="content-container">
          <div class="blur"></div>
        </div>
      </div>
    );
  }
}