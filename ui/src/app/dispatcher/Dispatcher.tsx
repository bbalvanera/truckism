import React from 'react';
import ContentLayout from '@components/ContentLayout';
import Body from './Body';
import Header from './Header';
import Subheader from './Subheader';

const Dispatcher = () => (
  <>
    <Header />
    <ContentLayout>
      <Subheader profileName="Profile Name" savefileName="Save name" />
      <Body />
    </ContentLayout>
  </>
);

export default Dispatcher;
