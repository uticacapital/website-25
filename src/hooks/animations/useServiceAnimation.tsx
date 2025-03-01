import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useServiceAnimation = (
  serviceCardRefs: React.RefObject<(HTMLElement | null)[]>
) => {
  React.useEffect(() => {
    gsap.utils
      .toArray<HTMLElement>(serviceCardRefs.current)
      .forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                end: "bottom 75%",
                toggleActions: "play none none reverse",
                once: true,
              },
            }
          );
        }
      });
  }, [serviceCardRefs]);
};
