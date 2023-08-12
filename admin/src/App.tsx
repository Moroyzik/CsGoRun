import React from 'react';
import { Admin, Resource, ListGuesser, defaultTheme } from 'react-admin';

import dataProvider from './providers/dataProviders';
import posts from './components/pages/Posts'

const App = () => {
  return (
      <Admin
          dataProvider={dataProvider}
          theme={{
              ...defaultTheme,
              palette: {
                  background: {
                      default: '#fafafb',
                  },
              },
          }}
      >
          <Resource name="posts" {...posts} />
          {/*<Resource name="comments" {...comments} />*/}
          <Resource name="tags" />
      </Admin>
  );
}

export default App;
