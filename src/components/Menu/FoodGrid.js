import styled from 'styled-components';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-bottom: 40px;

    @media(max-width: 400px){
    grid-template-columns: 1fr;
  }
`;

export const Food = styled.div`
    height: 100px;
    padding: 10px;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 7px;
    -webkit-box-shadow: -2px 11px 17px 0px rgba(0,0,0,0.37);
    transition: all .3s;
    box-shadow: -2px 11px 17px 0px rgba(0,0,0,0.37);
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
        transform: translateY(-3px)
    }
`;

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    text-transform: capitalize;
`;