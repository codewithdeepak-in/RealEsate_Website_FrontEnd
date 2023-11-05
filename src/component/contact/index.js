import styled from "styled-components";

const Contact = () => {
    return (
        <Container className="p-5">
            <h1>Contact</h1>
            <p>Get in touch with our sales executives</p>
            <div className="row">
                <div className="col-lg-6 mt-1 p-5">
                    <div className="row d-flex justify-content-between contact">
                        <div className="col-lg-5 col-md-6">
                            <h3>Contact No</h3>
                            <p>7037913778</p>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3>Email Id</h3>
                            <p>realestate@homy.com</p>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex justify-content-between contact">
                        <div className="col-lg-5 col-md-6">
                            <h3>Address</h3>
                            <p>Los Angles, USA</p>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3>Sales Executive</h3>
                            <p>9917906377</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 image" >
                    <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact_image" />
                </div>
            </div>
            <div className="p-2">
                <div className="orange">
                    Best Series of Arithecture Designs Available
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    h1{
        color: #ffa814;
        font-size: 3rem;
        position: relative;
        z-index: 1;
        font-weight: 900;
    }
    p{
        color: #1f3e72;
        font-size: 2rem;
        font-family: Poppins;
        font-weight: 900;
        margin-top: 1rem;
    }
    .contact div{
        padding: 1.4rem;
        color: white;
        border: 1px solid lightgrey;
        border-radius: 0.5rem;
        background-color: #1F3E72;
        cursor: pointer;
        box-shadow: 20px 20px 20px lightgrey;
        font-family: Poppins;
        transition: 0.5s ease-in-out;
    }
    .contact div:hover{
        transform: scale(1.08);
    }
    .contact div p{
        color: lightgrey;
        font-size: 1rem;
    }
    .image{
        display: flex; 
        justify-content: center;
        align-items: center;
    }
    .image img{
        border-radius: 1rem;
        height: 80%;
        width: 80%;
    }
    .orange{
        background-color: #FFA814; 
        color: white;
        height: 250px;
        width: 100%;
        border-radius: 20px;
        box-shadow: 20px 20px 20px lightgrey;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
        font-weight: 900;
        font-family: Poppins;
        text-align: center;
        position: relative;
    }
    @media screen and (max-width: 1000px){
        .image img {
            width: 100%;
            display: none;
        }
    }
`;
export default Contact;