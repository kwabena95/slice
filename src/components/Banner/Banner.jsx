import styled from 'styled-components';


const BannerStyled = styled.div`
    height: 100vh;
    background: url("/img/banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;


const Banner = () => {
    return (
        <BannerStyled />
    )
}

export default Banner
