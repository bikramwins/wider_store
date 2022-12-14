import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.jpg";
import { colors } from "../utils";
import { ROUTE_PATHS } from "../utils/routesPath";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Bikram Thakur</Name>
        <Badge content="Admin" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link to={ROUTE_PATHS.HOME}>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link to={ROUTE_PATHS.PRODUCTS}>
            <RiFileCopyLine />
            <h3>Products</h3>
          </Link>
          <Link to={ROUTE_PATHS.ORDERS}>
            <FaWallet />
            <h3>Orders</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="/">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0.4rem;
`;

const LinksContainer = styled.div`
  background-color: ${colors.darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled(NavLink)`
  margin-left: 10%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
    display: inline;
    padding-left: 12px;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
    display: inline;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
