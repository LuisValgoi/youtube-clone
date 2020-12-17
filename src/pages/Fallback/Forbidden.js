import React from "react";

import Fallback from "./Fallback";
import { useAuth } from "../../contexts/auth";

export default function Forbidden() {
  const { signIn, loading } = useAuth();

  return (
    <>
      <Fallback title={`We couldn't authenticate you`} subTitle="Please, try to enter log in the app again">
        <button onClick={() => signIn()}>{loading ? "Loading..." : "SignIn"}</button>
      </Fallback>
    </>
  );
}
