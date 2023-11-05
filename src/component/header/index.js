import styled from 'styled-components';
import image from './logo.png';

const Header = () => {
    return (
      <Container>
        <nav className="navbar navbar-expand-sm">
          <div className="container d-flex justify-content-between">
            <div>
              <a className="navbar-brand" href="#sdfsdf">
                <img src={image} alt="logo_img" />
              </a>
            </div>
            <div
              className="navbar-toggler"
        
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="text-white">
                <i class="fa-solid fa-bars-progress"></i>
              </span>
            </div>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="mynavbar"
            >
              <ul className="navbar-nav">
                {["Home", "About", "Residence", "Contact"].map((item, key) => {
                  return (
                    <li className="nav-item d-flex justify-content-center align-items-center p-2" key={key}>
                      <a className={`nav-link nav-${key}`} href="#sdfsdf">
                        {item}
                      </a>
                    </li>
                    
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    );
}
const Container = styled.div`
  nav {
    border-bottom: 0.5px solid rgb(240, 239, 239);
  }
  .nav-link {
    font-size: 1.4rem;
    color: white;
  }
  .nav-item {
    margin-left: 10px;
  }
  .nav-3 {
    background: #2f50d4;
    border-radius: 5px;
    width: 100px;
    color: white;
    text-align: center;
  }
  .navbar-expand-sm {
    background-color: #131110;
  }
`;
export default Header;