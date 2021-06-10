import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../../data/foodData';


const OrderStyled = styled.div`
    position: fixed;
    top: 75px;
    right: 0px;
    width: 340px;
    background-color: white;
    z-index: 10; 
    height: calc(100% - 70px);
    box-shadow: 4px 0px 5px 4px grey;
    display: flex;
   flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
    padding: 20px;
    height: 100%;
`;

const OrderContainer = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
    padding: 10px 0;
    display: grid;
    grid-template-columns: 20px 150px 20px 60px;
    justify-content: space-between;
`;


const Order = ({ orders }) => {
    return (
        <OrderStyled>
            {orders.length === 0 ?
                (<OrderContent>Your order is empty.</OrderContent>) :
                (<OrderContent>
                    {" "}
                    <OrderContainer>
                        Your Order:
                    </OrderContainer>{" "}
                    {orders.map(order => (
                        <OrderContainer>
                            <OrderItem>
                                <div>1</div>
                                <div>{order.name}</div>
                                <div>{formatPrice(order.price)}</div>
                            </OrderItem>
                        </OrderContainer>
                    ))}
                </OrderContent>)}

            <DialogFooter>
                <ConfirmButton>Checkout</ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}

export default Order
