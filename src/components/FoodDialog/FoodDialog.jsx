import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../../styles/colors';
import { formatPrice } from '../../data/foodData';
import QuantityInput from '../FoodDialog/QuantityInput';
import { useQuantity } from '../../hooks/useQuantity';
import Toppings from './Toppings';
import { useToppings } from '../../hooks/useToppings';
import { useChoice } from '../../hooks/useChoice';
import Choices from './Choices';


const Dialog = styled.div`
    width: 500px;
    min-height: 100px;
    max-height: calc(100% - 100px);
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 5;
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`;

const DialogShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => (img ? `background-image: url(${img})` : `min-height: 75px`)};
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    font-weight: 600;
    top: 100px;
    font-size: 30px;
    top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export const DialogContent = styled.div`
   overflow: auto;
   min-height: 100px;
   padding: 0px 40px;
   padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
   height: 60px;
   box-shadow: 0px -2px 10px gray;
   display: flex;
   justify-content: center;
`;


export const ConfirmButton = styled.div`
   margin: 10px;
   color: white;
   border-radius: 5px;
   padding: 10px;
   text-align: center;
   width: 300px;
   cursor: pointer;
   background-color: ${pizzaRed};
   font-weight: 600;
   font-size: 20px;
   ${({ disabled }) => disabled &&
        `
        opacity: .5;
        background-color: grey;
        pointer-events: none;
       `
    }
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
    return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);
}

function hasToppings(food) {
    return food.section === 'Pizza';
}

const FoodDialogContainer = ({ openFood, setOpenFood, orders, setOrders }) => {
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);


    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    }

    return (
        <>
            <DialogShadow onClick={close} />
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity} />
                    {hasToppings(openFood) && <>
                        <h3>Would you like some toppings?</h3>
                        <Toppings {...toppings} />
                    </>}
                    {openFood.choices && <Choices openFood={openFood} choiceRadio={choiceRadio} />}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={addToOrder}
                        disabled={openFood.choices && !choiceRadio.value}
                    >
                        Add to order: {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>

    );
}

export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}



