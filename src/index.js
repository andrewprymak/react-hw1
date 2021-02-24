import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/header';
import Сontactsearch from './components/search/contactsearch';
import СontactList from './components/contactList/contactList';
import Footer from './components/footer/footer';
// import ContactItem from './components/item/item';

const App = () => {
  return(
    <Fragment>
      <Header/>
      <Сontactsearch/>
      <СontactList/>
      {/* <ContactItem/> */}
      <Footer/>
    </Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
