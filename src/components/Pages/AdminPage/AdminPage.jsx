import React from 'react';

import AddBeerForm from 'components/Forms/AddBeerForm/AddBeerForm';
import EditGroupsForm from 'components/Forms/EditGroupsForm/EditGroupsForm';
import Page from 'pages/Page/Page';
// import SearchForm from 'components/Forms/SearchForm/SearchForm';

import './AdminPage.scss';

const AdminPage = () => (
  <Page header>
    {/* <SearchForm /> */}
    <AddBeerForm />
    <EditGroupsForm />
  </Page>
);

export default AdminPage;
