import React from "react";

import Fallback from "./Fallback";
import { useAuth } from "../../contexts/auth";

export default function Forbidden() {
  const { signIn, loading } = useAuth();

  const SignInButton = () => {
    return <button onClick={() => signIn()}>{loading ? "Loading..." : "SignIn"}</button>;
  };

  return (
    <>
      <Fallback title={`We couldn't authenticate you`} subTitle="Please, try to enter log in the app again" actionCustom={<SignInButton />} />
    </>
  );
}
