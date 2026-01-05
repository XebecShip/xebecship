import { ErrorComponent, Link, useRouter } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Button, Alert, AlertDescription, AlertTitle } from "@xebecship/ui";
import { AlertCircleIcon, RotateCcwIcon, HomeIcon } from "lucide-react";

export function DefaultCatchBoundary({ error, reset }: ErrorComponentProps) {
  const router = useRouter();

  console.error("DefaultCatchBoundary Error:", error);

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Something went wrong
          </h1>
          <p className="text-muted-foreground">
            We encountered an unexpected error while processing your request.
          </p>
        </div>

        <Alert variant="destructive" className="text-left">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Error Details</AlertTitle>
          <AlertDescription className="mt-2 font-mono text-xs break-all">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </AlertDescription>
        </Alert>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="gap-2"
          >
            <RotateCcwIcon className="h-4 w-4" />
            Try Again
          </Button>

          <Button
            variant="outline"
            className="gap-2"
            render={
              <Link to="/">
                <HomeIcon className="h-4 w-4" />
                Go Home
              </Link>
            }
          />
        </div>

        {/* Dev-only stack trace */}
        {import.meta.env.DEV && (
          <div className="bg-muted mt-8 max-h-[300px] overflow-auto rounded-md border p-4 text-left font-mono text-xs">
            <ErrorComponent error={error} />
          </div>
        )}
      </div>
    </div>
  );
}
