import React from "react";
import PropTypes from "prop-types";

import { StyledLogo } from "./style";

export default function Logo(props) {
  return (
    <a href={props.href}>
      <StyledLogo {...props} />
    </a>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
};
