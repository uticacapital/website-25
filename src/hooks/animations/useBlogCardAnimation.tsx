import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useBlogCardAnimation = (
  blogCardRefs: React.RefObject<(HTMLElement | null)[]>
) => {
  React.useEffect(() => {
    gsap.utils.toArray<HTMLElement>(blogCardRefs.current).forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "bottom 75%",
              toggleActions: "play none none reverse",
              once: true,
              scrub: 1,
            },
          }
        );
      }
    });
  }, [blogCardRefs]);
};
