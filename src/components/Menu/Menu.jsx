import styled from 'styled-components';
import { foods } from '../../data/foodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';



const MenuStyled = styled.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`;

const Menu = () => {
    return (
        <MenuStyled>
            <h2>Menu</h2>
            <FoodGrid>
                {foods.map((food, index) => (
                    <Food img={food.img} key={index}>
                        <FoodLabel>
                            {food.name}
                        </FoodLabel>
                    </Food>
                ))}
            </FoodGrid>
        </MenuStyled>
    )
}

export default Menu
