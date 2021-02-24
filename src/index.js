import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/header';
import Contactsearch from './components/search/contactsearch';
import СontactList1 from './components/contactList/contactList1';
import СontactList2 from './components/contactList/contactList2';
import Footer from './components/footer/footer';

const App = () => {
  return(
    <Fragment>
      <Header/>
      <Contactsearch/>
      <Fragment>
        <СontactList1/>
        <СontactList2/>
      </Fragment>
      <Footer/>
    </Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
