import gsap from "gsap";

export const runPreloaderAnimation = (root: HTMLElement) => {
  const q = gsap.utils.selector(root);

  const timeline = gsap.timeline({
    defaults: { duration: 0.6 },
  });

  timeline
    .fromTo(q("[data-preloader-title]"), { opacity: 0 }, { opacity: 1, duration: 1 })
    .to(q("[data-preloader-title]"), {
      opacity: 0,
      duration: 0.6,
    })
    .to(q("[data-preloader-slide='6']"), {
      y: 600,
      duration: 0.6,
    })
    .to(
      q("[data-preloader-slide='8']"),
      {
        y: -600,
      },
      "<"
    )
    .to(q("[data-preloader-slide='4'], [data-preloader-slide='1']"), {
      x: -120,
    })
    .to(
      q("[data-preloader-slide='5'], [data-preloader-slide='7']"),
      {
        x: 220,
      },
      "<"
    )
    .fromTo(
      q("[data-preloader-slide='1']"),
      {
        clipPath: "polygon(0% 0%, 60% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 20% 0%, 100% 80%, 100% 100%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      q("[data-preloader-slide='4']"),
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)",
      }
    )
    .fromTo(
      q("[data-preloader-slide='1']"),
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      q("[data-preloader-slide='2']"),
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      q("[data-preloader-slide='5']"),
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 0%)",
      },
      "<"
    )
    .fromTo(
      q("[data-preloader-slide='7']"),
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)",
      },
      "<"
    )
    .fromTo(
      q("[data-preloader-slide='3']"),
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 100% 0%)",
      },
      "<"
    )
    .to(root, {
      display: "none",
      delay: 1,
    });

  return timeline;
};
