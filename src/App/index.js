import React from 'react';
import { AppRender } from './AppRender';
import { TodoProvider } from '../TodoContext';
 




function App() {
 
  return (
    <TodoProvider>
        <AppRender/>
    </TodoProvider>
  );
}

export default App;