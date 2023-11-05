import styled from "styled-components";
import image1 from './images/equinix.png';
import image2 from './images/prologis.png';
import image3 from './images/realty.png';
import image4 from './images/tower.png';

const Brands = () => {
    return (
        <Container>
            <img src={image1} alt="brand_image" />
            <img src={image2} alt="brand_image"/>
            <img src={image3} alt="brand_image" />
            <img src={image4} alt="brand_image" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 1rem; 
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    img{
        height: 90px;
    }
    @media screen and (max-width: 700px){
        justify-content: center;
        padding-top: 1rem;
        img{
            height: 70px;
            padding: 0.5rem;
        }
    }
`;

export default Brands;