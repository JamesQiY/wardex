import React from 'react';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import PageProvider from './hooks/PageContext';

function App() {
  return (
    <div id='app' className="app h-full page-container">
      <PageProvider>
        <Sidebar/>
        <Main/>
      </PageProvider>
    </div>
  );
}

export default App;
