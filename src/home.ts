window.addEventListener("load", () => {
  if (typeof (window as any).gsap === "undefined") return;

  const card1 = document.querySelector<HTMLElement>(".card-1");
  const card2 = document.querySelector<HTMLElement>(".card-2");
  const card3 = document.querySelector<HTMLElement>(".card-3");
  const titleWords = document.querySelectorAll<HTMLElement>(".title-word");
  const subtitle = document.querySelector<HTMLElement>(".subtitle");
  const btnReplay = document.querySelector<HTMLButtonElement>("#btn-replay");

  function createIntroTimeline() {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleWords, {
      yPercent: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
    })
      .from(subtitle, { y: 16, opacity: 0, duration: 0.6 }, "-=0.25")
      .from(btnReplay, { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");

    if (card1) {
      tl.from(card1, { opacity: 0, y: 30, duration: 0.6 }, "-=0.1");
    }
    if (card2) {
      tl.from(
        card2,
        {
          opacity: 0,
          x: -120,
          duration: 0.9,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3",
      );
    }
    if (card3) {
      tl.from(
        card3,
        {
          opacity: 0,
          rotation: -20,
          transformOrigin: "center bottom",
          y: 40,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.4",
      );
    }

    return tl;
  }

  let introTimeline = createIntroTimeline();

  if (btnReplay) {
    btnReplay.addEventListener("click", () => {
      introTimeline.kill();
      gsap.set([card1, card2, card3, titleWords, subtitle, btnReplay], {
        clearProps: "all",
      });
      introTimeline = createIntroTimeline();
    });
  }

  [card1, card2, card3].forEach((card) => {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      if (card === card2) {
        gsap.to(card, {
          x: 20,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      } else if (card === card3) {
        gsap.to(card, {
          rotation: 5,
          y: -8,
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(card, {
          y: -6,
          scale: 1.02,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  });

  const scrollBox = document.querySelector<HTMLElement>(".scroll-box");
  if (scrollBox && typeof (window as any).ScrollTrigger !== "undefined") {
    gsap.registerPlugin((window as any).ScrollTrigger);
    gsap.fromTo(
      scrollBox,
      {
        scale: 0.9,
        borderRadius: 30,
        borderColor: "rgba(56,189,248,0.4)",
        boxShadow: "0 0 0 rgba(56,189,248,0)",
      },
      {
        scale: 1,
        borderRadius: 14,
        borderColor: "rgba(168,85,247,0.9)",
        boxShadow: "0 0 40px rgba(56,189,248,0.6)",
        background:
          "radial-gradient(circle at 0 0, rgba(56,189,248,0.18), transparent 55%), rgba(15,23,42,0.9)",
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      },
    );
  }
});

