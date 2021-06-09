import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './styles/globalStyles';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  )
}

export default App



