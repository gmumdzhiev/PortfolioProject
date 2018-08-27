import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
//import Footer from './pages/Footer';
//import ContactPage from './pages/ContactUsPage';
//import AboutPage from './pages/AboutUsPage';
//import Home from './pages/Homepage';
import Router from './components/Router';



const NotFound = () => <h2>Error! 404</h2>


/*const routes = {
  '/': Home,
  '/contact': ContactPage,
  '/about': AboutPage,
  '/websocket': Websocket,
  // '/user/:name': PrivateMessagePage, //this.props.name
  'error': NotFound,
}
*/
class App extends Component {
  constructor() {
    super()
    this.state = { in: true }
  }

  componentDidMount() {
    const f = () => {
      this.setState({ in: false })
    }
    setTimeout(f, 2000)
  }

  render() {
    const {

      location,
      oldlocation,


    } = this.props




    return (
      <div className='App'>
        <Navigation />

      </div>
    );
    /*<Footer />
    <hr />
    <Router location={oldlocation} routes={routes} />
    <Router location={location} routes={routes} />*/
  }
}

const mapStateToProps = (state) => ({





  location: state.oldLocation.currentLocation,
  oldlocation: state.oldLocation.previousLocation,
})

export default connect(mapStateToProps)(App);
