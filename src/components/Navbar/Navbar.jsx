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
    display: flex;
    justify-content: space-between;
    align-items: center
`;

const UserStatus = styled.div`
    color: white;
    font-size: 12px;
    margin-right: 30px;
`;

const LoginButton = styled.span`
    cursor: pointer;
`;

const Navbar = ({ login, loggedIn, logout }) => {
    return (
        <NavbarStyled>
            Slice 🍕
            <UserStatus>
                {
                    loggedIn !== 'loading' ? (
                        <>
                            {loggedIn ? `Hello, ${loggedIn.displayName}` : ''}
                            {
                                loggedIn ? (
                                    <LoginButton onClick={logout} style={{ paddingLeft: '15px' }}>Log out</LoginButton>
                                ) : (
                                    <LoginButton onClick={login}>Log in / sign up</LoginButton>
                                )
                            }
                        </>
                    ) : ('loading...')
                }

            </UserStatus>
        </NavbarStyled>
    )
}

export default Navbar
