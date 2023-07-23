import { styled } from "styled-components";

interface Props {
  $actualLanguage: "pt" | "en";
}

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem 0 3rem;
`;

export const Logo = styled.h1`
  color: var(--pink);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  @keyframes fill {
    0% {
      width: 0%;
      height: 1px;
    }
    50% {
      width: 100%;
      height: 1px;
    }
    100% {
      width: 100%;
      height: 100%;
      background: var(--blue);
    }
  }

  @-webkit-keyframes fill {
    0% {
      width: 0%;
      height: 1px;
    }
    50% {
      width: 100%;
      height: 1px;
    }
    100% {
      width: 100%;
      height: 100%;
      background: var(--blue);
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding-right: 3rem;

    a {
      color: var(--blue);
      padding: 15px;
      font-weight: bold;
      transition: color 0.5s linear 0.5s;
      text-transform: uppercase;
      position: relative;

      &:hover {
        color: var(--background);
        z-index: 1;
      }

      &:before,
      &:after {
        transition: all 0.5s;
      }

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: ".";
        color: transparent;
        height: 1px;
        text-align: left;
        margin: 0;
        opacity: 0;
      }

      &:hover:after {
        width: 100%;
        z-index: -10;
        animation: fill 1s forwards;
        -webkit-animation: fill 1s forwards;
        -moz-animation: fill 1s forwards;
        opacity: 1;
      }
    }
  }
`;

export const Dropdown = styled.div<Props>`
  position: relative;
  display: inline-block;

  svg {
    color: var(--pink);
    transition: color 0.2s linear 0.2s;
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
      margin-top: 0.5rem;

      img {
        width: 35px;
      }

      img.pt {
        opacity: ${(props) => (props.$actualLanguage === "pt" ? 1 : 0.5)};
      }

      img.en {
        opacity: ${(props) => (props.$actualLanguage === "en" ? 1 : 0.5)};
        transition: opacity 0.3s linear 0.3s;
      }

      &:hover {
        img {
          opacity: 1;
        }
      }
    }

    .dropdown-buttons-container {
      display: flex;
      flex-direction: column;
    }
  }

  &:hover {
    svg {
      color: var(--blue);
    }

    .dropdown-content {
      display: block;
    }
  }
`;
