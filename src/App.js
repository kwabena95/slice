import Banner from './components/Banner/Banner';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Order from './components/Order/Order';
import { GlobalStyle } from './styles/globalStyles';
import { useOpenFood } from './hooks/useOpenFood';
import { useOrders } from './hooks/useOrders';
import { useTitle } from './hooks/useTitle';
import { useAuthentication } from './hooks/useAuthentication';
import OrderDialog from './components/Order/OrderDialog';
import { useOrderDialog } from './hooks/useOrderDialog';

const App = () => {

  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();
  useTitle({
    ...openFood,
    ...orders
  });
  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  )
}

export default App



