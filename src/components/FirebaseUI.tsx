import { auth } from "@/firebase";
import { useAuth } from "@clerk/clerk-react";
import { signInWithCustomToken } from "firebase/auth";

export default function FirebaseUI() {
  const { getToken } = useAuth();

  const signInWithClerk = async () => {
    console.log("Sign in with clerk");
    const token = await getToken({ template: "integration_firebase" });
    const userCredentials = await signInWithCustomToken(auth, token || "");
    // The userCredentials.user object can call the methods of
    // the Firebase platform as an authenticated user.
    console.log("User:", userCredentials.user);
  };

  return <button onClick={signInWithClerk}>Sign in</button>;
}
