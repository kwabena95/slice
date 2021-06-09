import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';


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
      <Navbar />
    </>
  )
}

export default App



