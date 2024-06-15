import React from 'react';
import letterLogoImg from '../../assets/images/logo_letter.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthDispatch, useAuthState } from '../../utils/AuthContext';
import AuthService from '../../apis/AuthService';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
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

const EmailSpan = styled.span`
  font-size: 16px;
  color: #4f4e4e;
  font-weight: 600;
`;

const LogoutBtn = styled.button`
  all: unset;
  font-size: 16px;
  background: #4f4e4e;
  border-radius: 8px;
  color: #fff;
  padding: 8px 10px;
  margin: 0 0 0 10px;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Header() {
  const { isAuthenticated, username } = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await AuthService.logout();
      dispatch({ type: 'LOGOUT' });

      alert(response.message);
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패');
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <LeftContainer>
          <Link to="/">
            <LogoImage src={letterLogoImg} alt="로고" />
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
            {isAuthenticated ? (
              <li>
                {' '}
                <EmailSpan>{username}</EmailSpan>
                <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
              </li>
            ) : (
              <LinkItem to="/login">Login</LinkItem>
            )}
          </NavList>
        </div>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
