import styled from "styled-components";

import { Link } from "react-router-dom";
import * as Colors from "../../styles/Colors";

export const StyledLink = styled(Link)`
  color: ${Colors.LINK_COLOR};
  text-decoration: none;
  font-weight: bold;
  margin: 0.3rem;
  letter-spacing: -5;
`;
