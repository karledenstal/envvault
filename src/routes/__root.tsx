import FirebaseUI from "@/components/FirebaseUI";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="top-0 left-0 sticky border-b border-b-zinc-800">
        <div className="w-full max-w-sm lg:max-w-7xl mx-auto flex items-center justify-between">
          <ul>
            <li>
              <Link to="/" className="flex items-center gap-3">
                <img className="w-7 aspect-square" src="/favicon.png" />
                <strong>ENV Vault</strong>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-2 p-4">
            <FirebaseUI />
            <SignedIn>
              <div className="flex items-center gap-2">
                <Link to="/dashboard">
                  <Button variant="outline" className="text-sm py-2 px-4">
                    Dashboard
                  </Button>
                </Link>
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm lg:max-w-5xl mx-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
