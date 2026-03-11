"use strict";
window.addEventListener("load", () => {
    if (typeof window.gsap === "undefined")
        return;
    const outerOutline = document.querySelector(".outer-outline");
    const titleMain = document.querySelector(".title-main");
    const subtitleMain = document.querySelector(".subtitle-main");
    const block1 = document.querySelector(".block-1");
    const block2 = document.querySelector(".block-2");
    const block3 = document.querySelector(".block-3");
    const timelineDot = document.querySelector(".timeline-dot");
    const orbitRing = document.querySelector(".orbit-ring");
    const orbitDot = document.querySelector(".orbit-dot");
    const playGlow = document.querySelector(".play-glow");
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    // Tracé du contour (stroke-dashoffset)
    if (outerOutline) {
        gsap.set(outerOutline, {
            strokeDasharray: 1400,
            strokeDashoffset: 1400,
            fill: "none",
            stroke: "rgba(148, 163, 184, 0.35)",
            strokeWidth: 2,
        });
        tl.to(outerOutline, {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power2.inOut",
        });
    }
    // Titre (machine à écrire) et sous-titre
    const titleText = document.querySelector("#title-typewriter");
    const titleContent = "Présentation vidéo – Chapitre 1";
    if (titleMain && titleText) {
        gsap.set(titleMain, { y: 16, opacity: 0 });
        tl.to(titleMain, { y: 0, opacity: 1, duration: 0.7 }, "-=1.2");
        const typewriterObj = { index: 0 };
        const updateTypewriter = () => {
            const i = Math.floor(typewriterObj.index);
            const cursor = i < titleContent.length ? "|" : "";
            titleText.textContent = titleContent.slice(0, i) + cursor;
        };
        tl.to(typewriterObj, {
            index: titleContent.length,
            duration: 1.8,
            ease: "none",
            onStart: updateTypewriter,
            onUpdate: updateTypewriter,
        }, "-=0.3");
    }
    if (subtitleMain) {
        gsap.set(subtitleMain, { y: 16 });
        tl.to(subtitleMain, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5");
    }
    // Blocs de contenu (style présentation)
    if (block1) {
        gsap.set(block1, { x: -40 });
        tl.to(block1, { x: 0, opacity: 1, duration: 0.7 }, "-=0.4");
    }
    if (block2) {
        gsap.set(block2, { y: 35 });
        tl.to(block2, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3");
    }
    if (block3) {
        gsap.set(block3, { x: 40 });
        tl.to(block3, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3");
    }
    // Timeline en bas (pop-in)
    if (timelineDot) {
        gsap.set(timelineDot, { scale: 0.3 });
        tl.to(timelineDot, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.4)",
        }, "-=0.2");
    }
    // Orbite et point en rotation (boucle infinie)
    if (orbitRing) {
        gsap.set(orbitRing, {
            fill: "none",
            stroke: "rgba(56, 189, 248, 0.35)",
            strokeWidth: 1.5,
            strokeDasharray: "8 10",
        });
        gsap.to(orbitRing, {
            rotation: 360,
            duration: 12,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
        });
    }
    if (orbitDot) {
        gsap.set(orbitDot, { x: 120, transformOrigin: "-120px 0" });
        gsap.to(orbitDot, {
            rotation: 360,
            duration: 6,
            repeat: -1,
            ease: "none",
        });
    }
    // Pulsation du bouton play
    if (playGlow) {
        gsap.to(playGlow, {
            scale: 1.08,
            opacity: 0.9,
            duration: 0.9,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }
});
