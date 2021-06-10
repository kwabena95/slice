import Banner from './components/Banner/Banner';
import FoodDialog from './components/FoodDialog/FoodDialog';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Order from './components/Order/Order';
import { GlobalStyle } from './styles/globalStyles';
import { useOpenFood } from './hooks/useOpenFood';
import { useOrders } from './hooks/useOrders';

const App = () => {

  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  )
}

export default App



