import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    console.log("session:", session);

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-900 w-screen h-screen flex items-center">
      <div className="text-center w-full p-2 rounded-lg">
        <div className="bg-white p-2 m-10 rounded-lg">
          Logged in {session.user.email}
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className="bg-white p-2 m-10 rounded-lg"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
