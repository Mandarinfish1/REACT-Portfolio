import styled from "styled-components"

export const StyledNavigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    &.active,
    &:hover {
      color: #007bff;
    }
  }
`
