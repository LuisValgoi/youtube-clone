import React from "react";

import { Link } from "react-router-dom";

export default function Fallback({ title, subTitle, actionCustom, actionButtonPath, actionButtonText }) {
  return (
    <div>
      <center>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        {!actionCustom ? (
          <Link to={actionButtonPath}>
            <button>{actionButtonText}</button>
          </Link>
        ) : (
          { actionCustom }
        )}
      </center>
    </div>
  );
}
