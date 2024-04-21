import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <header className="py-32 flex flex-col gap-12">
        <h1 className="font-bold text-6xl flex flex-col gap-4">
          Simply store your
          <div className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            environment variables
          </div>
        </h1>
        <h2>
          Gather all your env variables under a project for ease of use &
          sharing.
        </h2>
        <div className="flex flex-row items-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </header>
      {/* <FirebaseUI /> */}
    </>
  );
}
