import React from "react";

import { useAuth } from "../../contexts/auth";

export default function Home() {
  const { signIn, signOut, loading } = useAuth();

  return (
    <div style={{ color: "white" }}>
      <button onClick={() => signOut()}>{loading ? "Loading..." : "SignOut"}</button>

      <button onClick={() => signIn()}>{loading ? "Loading..." : "SignIn"}</button>
    </div>
  );
}
