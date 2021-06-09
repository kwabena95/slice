import { createGlobalStyle } from 'styled-components';


// global styles
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      hello slice
    </>
  )
}

export default App



