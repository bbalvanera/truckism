import React from 'react';
import ContentLayout from '@components/ContentLayout';
import Body from './Body';
import Header from './Header';
import Subheader from './Subheader';
import CurrentProfileProvider from './providers/CurrentProfileProvider';

const Dispatcher = () => (
  <CurrentProfileProvider>
    <Header />
    <ContentLayout>
      <Subheader />
      <Body />
    </ContentLayout>
  </CurrentProfileProvider>
);

export { Dispatcher };
