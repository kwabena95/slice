import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../../styles/colors';

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
    ${({ img }) => `background-image: url(${img})`};
    background-position: center;
    background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
    font-weight: 600;
    top: 100px;
    font-size: 30px;

`;

export const DialogContent = styled.div`
   overflow: auto;
   min-height: 100px;
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
   width: 200px;
   cursor: pointer;
   background-color: ${pizzaRed};
   font-weight: 600;
   font-size: 20px;
`;

const FoodDialog = ({ openFood, setOpenFood, orders, setOrders }) => {
    function close() {
        setOpenFood();
    }
    if (!openFood) return null;

    const order = {
        name: openFood.name
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    }
    return openFood ? (
        <>
            <DialogShadow onClick={close} />
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent />
                <DialogFooter>
                    <ConfirmButton onClick={addToOrder}>Add to order</ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>

    ) : null;
}

export default FoodDialog
