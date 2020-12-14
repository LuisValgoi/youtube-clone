import styled from "styled-components";

export const StyledLogoArea = styled.a`
  position: relative;
  text-align: center;
  margin: 0 auto;
`;

export const StyledLogo = styled.img`
  max-width: 4rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
`;
