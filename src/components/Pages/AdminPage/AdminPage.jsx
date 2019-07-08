import React from 'react';

import AddBeerForm from 'components/Forms/AddBeerForm/AddBeerForm';
import EditGroupsForm from 'components/Forms/EditGroupsForm/EditGroupsForm';
// import SearchForm from 'components/Forms/SearchForm/SearchForm';

import './AdminPage.scss';

const AdminPage = () => (
  <article className='adminpage-container'>
    {/* <SearchForm /> */}
    <AddBeerForm />
    <EditGroupsForm />
  </article>
);

export default AdminPage;
