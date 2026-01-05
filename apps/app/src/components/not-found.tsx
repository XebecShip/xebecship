import { Link } from "@tanstack/react-router";
import { Button } from "@xebecship/ui";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* Large 404 Visual */}
        <h1 className="text-muted/20 text-[10rem] leading-none font-extrabold select-none">
          404
        </h1>

        <div className="relative space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have
            been removed or relocated.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="gap-2"
            render={
              <Link to="/">
                <HomeIcon className="h-4 w-4" />
                Back to Home
              </Link>
            }
          />

          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
