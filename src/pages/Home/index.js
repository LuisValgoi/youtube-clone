import React from "react";

import { useAuth } from "../../contexts/auth";

export default function Home() {
  const { signOut, loading } = useAuth();

  return (
    <div style={{ color: "white" }}>
      <button onClick={() => signOut()}>{loading ? "Loading..." : "SignOut"}</button>
    </div>
  );
}
