import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  return (
    <div className="py-12">
      <div className="flex items-center justify-between border-b border-b-zinc-800 pb-2">
        <p className="font-mono">{12} projects</p>
        <div>
          <Button>Create project</Button>
        </div>
      </div>
    </div>
  );
}
