import React from 'react';
import letterLogoImg from '../../assets/images/logo_letter.png';
import mockupProfile from '../../assets/images/mockup-profile.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 80px;
  background: #f7f7f7;
  box-shadow: 0px 1px 30px 0px rgba(123, 122, 122, 0.25);
`;

const Container = styled.div`
  width: 996px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 80px;
  height: 60px;
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  gap: 50px;
  height: 100%;
  align-items: center;
`;

const LinkItem = styled(Link)`
  font-size: 20px;
  color: #4f4e4e;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

const ProfileWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <LeftContainer>
          <Link to="/">
            <img src={letterLogoImg} alt="로고" />
          </Link>
        </LeftContainer>
        <div>
          <NavList>
            <li>
              <LinkItem to="/inventory">Inventory</LinkItem>
            </li>
            <li>
              <LinkItem to="/menulist">MenuList</LinkItem>
            </li>
            <li>
              <LinkItem to="/staff">Staff</LinkItem>
            </li>
            <li>
              <LinkItem to="/settings">Settings</LinkItem>
            </li>
            <ProfileWrap>
              <LinkItem to="/settings">
                <ProfileImg src={mockupProfile} alt="임시프로필이미지" />
              </LinkItem>
            </ProfileWrap>
          </NavList>
        </div>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
