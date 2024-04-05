// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);


// // eslint-disable-next-line react/no-deprecated
// ReactDOM.render(
//     <BrowserRouter>
//     <App/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);