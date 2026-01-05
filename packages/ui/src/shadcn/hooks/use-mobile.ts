import * as React from "react";

const MOBILE_QUERY = "(max-width: 767px)";

/**
 * A hook that returns a boolean indicating if the screen is mobile or not.
 * It uses the `window.matchMedia` API to check the screen size.
 *
 * It is memoized to avoid re-calculating the value on every render.
 * The event listener is added and removed automatically.
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile()
 *
 * if (isMobile) {
 *  return <div>Mobile</div>
 * }
 *
 * return <div>Desktop</div>
 * ```
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
