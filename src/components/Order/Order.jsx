import styled from 'styled-components';
import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';


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



const Order = () => {
    return (
        <OrderStyled>
            <OrderContent>
                Your order is empty.
            </OrderContent>
            <DialogFooter>
                <ConfirmButton>Checkout</ConfirmButton>
            </DialogFooter>
        </OrderStyled>
    )
}

export default Order
