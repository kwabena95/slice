import styled from 'styled-components';
import { pizzaRed } from '../../styles/colors';

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 1px 1px 4px #380502;
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const Navbar = () => {
    return (
        <NavbarStyled>
            Slice 🍕
        </NavbarStyled>
    )
}

export default Navbar
