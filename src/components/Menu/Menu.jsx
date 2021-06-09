import styled from 'styled-components';
import { foods } from '../../data/foodData';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';



const MenuStyled = styled.div`
    margin: 0px 400px 50px 20px;
    height: 1000px;
`;

const Menu = ({ setOpenFood }) => {
    return (
        <MenuStyled>
            {Object.entries(foods).map(([sectionName, foods]) => (
                <>
                    <h2 style={{ margin: '10px 0' }}>{sectionName}</h2>
                    <FoodGrid>
                        {foods.map((food) => (
                            <Food img={food.img} key={food.id} onClick={() => setOpenFood(food)}>
                                <FoodLabel>
                                    {food.name}
                                </FoodLabel>
                            </Food>
                        ))}
                    </FoodGrid>
                </>
            ))
            }
        </MenuStyled >
    )
}

export default Menu
