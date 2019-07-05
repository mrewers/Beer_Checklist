import React from 'react';

import AddBeerForm from '../../Forms/AddBeerForm/AddBeerForm';
import SearchForm from '../../Forms/SearchForm/SearchForm';

import './AdminPage.css';

const AdminPage = () => (
  <article className='adminpage-container'>
    <SearchForm />
    <AddBeerForm />
  </article>
);

export default AdminPage;
