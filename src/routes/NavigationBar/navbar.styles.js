import styled from 'styled-components';

export const LogoContainer = styled.div``;

export const NavbarLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;

  ${LogoContainer} {
    padding: 21px 25px;
  }

  .link-items {
    cursor: pointer;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const Head = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  background-color: white;
`;
