"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.substring(1);
    if (!id) return;

    let retries = 0;
    const maxRetries = 30; // Try for 3 seconds
    const interval = 100;

    const attemptScroll = () => {
      const element = document.getElementById(id);
      const navbar = document.querySelector("nav"); // Assuming 'nav' is your navbar element
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      if (element) {
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(attemptScroll, interval);
      }
    };
    setTimeout(attemptScroll, 100);
  }, [pathname]);

  return null; // This component doesn't render anything visible
};

export default ScrollHandler;
