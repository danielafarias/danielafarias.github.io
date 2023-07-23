import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
`;

export const Logo = styled.h1`
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  svg {
    color: var(--primary);
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: transparent;
    z-index: 1;

    button {
      border-radius: 9999px;
      padding: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 30px;
      }
    }

    .dropdown-buttons-container {
      display: flex;
      flex-direction: column;
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
`;
