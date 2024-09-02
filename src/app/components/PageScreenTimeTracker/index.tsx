"use client";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageScreenTimeTracker = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const pageLoadTime = Date.now();

    const handleRouteChange = () => {
      const pageUnloadTime = Date.now();
      const timeSpent = pageUnloadTime - pageLoadTime;

      // Send timeSpent to your backend or analytics service
      console.log(`Time spent on ${pathname}: ${timeSpent} ms`);
      // Example: send the data to an API endpoint
      // fetch('/api/track-time', { method: 'POST', body: JSON.stringify({ path: pathname, timeSpent }) });
    };

    // Mimicking route change detection using cleanup
    return () => {
      handleRouteChange(); // Track time when the component unmounts
    };
  }, [pathname]);

  return <>{children}</>;
};

export default PageScreenTimeTracker;
