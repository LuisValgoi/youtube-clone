import React from "react";

import Fallback from "../Fallback";
import { CONSTANTS as Constants } from "../../routes/path";

export default function NotFound() {
  return (
    <>
      <Fallback title={`We couldn't identify this URL`} subTitle="Please, try to enter a new one" actionButtonPath={Constants.HOME.path} actionButtonText="Go to Home" />
    </>
  );
}
