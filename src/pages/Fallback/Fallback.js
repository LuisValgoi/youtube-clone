import React from "react";

import { Link } from "react-router-dom";

export default function Fallback({ title, subTitle, actionButtonPath, actionButtonText, children }) {
  return (
    <div>
      <center>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        {!children ? (
          <Link to={actionButtonPath}>
            <button>{actionButtonText}</button>
          </Link>
        ) : (
          <>{children}</>
        )}
      </center>
    </div>
  );
}
