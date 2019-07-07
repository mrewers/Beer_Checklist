import React from 'react';

import AddBeerForm from '../../Forms/AddBeerForm/AddBeerForm';
import EditGroupsForm from '../../Forms/EditGroupsForm/EditGroupsForm';
import SearchForm from '../../Forms/SearchForm/SearchForm';

import './AdminPage.css';

const AdminPage = () => (
  <article className='adminpage-container'>
    <SearchForm />
    <AddBeerForm />
    <EditGroupsForm />
  </article>
);

export default AdminPage;
