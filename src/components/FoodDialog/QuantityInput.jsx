import styled from 'styled-components';
import { pizzaRed } from '../../styles/colors';


const QuantityInputStyled = styled.input`
    font-size: 18px;
    width: 20px;
    text-align: center;
    border: none;
    outline: none;
`;

const IncrementContainer = styled.div`
    display: flex;
    height: 24px;
    font-size: 20px;
    font-weight: 700;
`;

const IncrementButtom = styled.div`
   width: 23px;
   color: ${pizzaRed};
   font-size: 20px;
   text-align: center;
   cursor: pointer;
   line-height: 23px;
   margin: 0px 10px;
   border: 1px solid #f44336;
   border: 1px solid ${pizzaRed};
   ${({ disabled }) =>
        disabled &&
        `opacity: 0.5;
    pointer-events: none;
   `}
   &:hover{
       background-color: #ffe3e3;
   }
`;

const QuantityInput = ({ quantity }) => {
    const increaseQuantity = () => quantity.setValue(quantity.value + 1);
    const decreaseQuantity = () => quantity.setValue(quantity.value - 1);
    return (
        <div>
            <IncrementContainer>
                <div>Quantity: </div>
                <IncrementButtom onClick={decreaseQuantity} disabled={quantity.value === 1}>-</IncrementButtom>
                <QuantityInputStyled {...quantity} />
                <IncrementButtom onClick={increaseQuantity}>+</IncrementButtom>
            </IncrementContainer>

        </div>
    )
}

export default QuantityInput
