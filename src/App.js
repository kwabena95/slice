import { useState } from 'react';
import Banner from './components/Banner/Banner';
import FoodDialog from './components/FoodDialog/FoodDialog';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Order from './components/Order/Order';
import { GlobalStyle } from './styles/globalStyles';


const App = () => {

  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  )
}

export default App



