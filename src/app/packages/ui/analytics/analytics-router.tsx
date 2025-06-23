'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function GoogleAnalyticsRouter() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname && (window as any).gtag) {
  (window as any).gtag('config', 'G-EESB3Q218S', { page_path: pathname });
  previousPath.current = pathname;
}

  }, [pathname]);

  return null;
}
