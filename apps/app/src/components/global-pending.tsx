import { Loader2Icon } from "lucide-react";

export function GlobalPending() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        <Loader2Icon className="text-primary h-12 w-12 animate-spin" />
        <p className="text-muted-foreground animate-pulse text-sm font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
