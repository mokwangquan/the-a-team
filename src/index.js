import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from "@/store"
import styled from "styled-components"
import PageOne from "@/components/page-one"
import PageTwo from "@/components/page-two"
import PageThree from "@/components/page-three"

const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = (props) => {
  const {
    className
  } = props || {}

  const [page, setPage] = useState(3)
  const [amount, setAmount] = useState(0)

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div 
          id="app"
          className={className}
        >
          {page === 1 && (
            <PageOne 
              setPage={setPage}
            />
          )}
          {page === 2 && (
            <PageTwo 
              setPage={setPage}
              amount={amount}
              setAmount={setAmount}
            />
          )}
          {page === 3 && (
            <PageThree 
              setPage={setPage}
              amount={amount}
            />
          )}
        </div>
      </Provider>
    </React.StrictMode>
  )
}

const StyledComponent = styled(Root)`
height: 90vh;

#app {
  padding-bottom: 5rem;
  height: 80vh;
  overflow-y: scroll;
}

.footer {
  background-color: lightgrey;
  position: fixed;
  padding: 1rem 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  text-align: center;
}
`

root.render(
  <StyledComponent />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
