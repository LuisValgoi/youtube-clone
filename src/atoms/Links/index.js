import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./style";

export default function Links({ links }) {
  return (
    <>
      {links &&
        links.length > 0 &&
        links.map((link) => {
          return (
            <StyledLink key={link.key} to={link.to}>
              {link.text}
            </StyledLink>
          );
        })}
    </>
  );
}

Links.propTypes = {
  links: PropTypes.array,
};
