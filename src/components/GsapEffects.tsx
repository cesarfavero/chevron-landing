"use client";

import { useGsap, gsap, ScrollTrigger } from "@/hooks/useGsap";

/**
 * Ports the Offgrid Studio GSAP/ScrollTrigger setup 1:1 for structure + effects.
 */
export function GsapEffects() {
  useGsap(() => {
    // Manifesto word split
    const manifestoTitle = document.querySelector(".manifesto-title");
    if (manifestoTitle && !manifestoTitle.querySelector(".mask-wrap")) {
      const text = manifestoTitle.textContent?.trim() || "";
      manifestoTitle.innerHTML = "";
      text.split(/\s+/).forEach((word) => {
        const mask = document.createElement("span");
        mask.className = "mask-wrap mr-[1vw]";
        const span = document.createElement("span");
        span.innerText = word;
        span.className = "inline-block manifesto-word";
        mask.appendChild(span);
        manifestoTitle.appendChild(mask);
      });
    }

    const mm = gsap.matchMedia();

    // 1. Hero entrance
    const heroTl = gsap.timeline();
    heroTl
      .from(".hero-text", {
        x: (i: number) => (i === 0 ? "-20%" : "20%"),
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.2,
      })
      .from(
        ".hero-image-block",
        {
          scale: 0.8,
          rotation: 0,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.2",
      )
      .from(
        "nav, .hero-image-block .hero-overlay-grid",
        {
          y: -20,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=1",
      );

    // Parallax hero text
    gsap.fromTo(
      ".hero-text",
      { xPercent: 0 },
      {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        xPercent: (i: number, el: Element) => {
          const speed = parseFloat(
            (el as HTMLElement).getAttribute("data-speed") || "1",
          );
          return i === 0 ? -(20 * speed) : +(20 * speed);
        },
      },
    );

    // 2. Stats counters
    ScrollTrigger.create({
      trigger: ".stat-block",
      start: "top 80%",
      once: true,
      onEnter: () => {
        document.querySelectorAll<HTMLElement>(".counter").forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target") || "0", 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              counter.innerHTML = String(Math.round(obj.val));
            },
          });
        });
      },
    });

    gsap.from(".manifesto-word", {
      scrollTrigger: { trigger: ".manifesto-title", start: "top 80%" },
      y: "100%",
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
    });

    gsap.from(".manifesto-body", {
      scrollTrigger: { trigger: ".manifesto-body", start: "top 85%" },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });

    // 3. Services
    gsap.to(".distorted-bg", {
      scrollTrigger: {
        trigger: "#vectors-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      yPercent: -50,
    });

    gsap.from(".service-item", {
      scrollTrigger: { trigger: ".list-container", start: "top 70%" },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
    });

    // 4. Works / archives
    const projects = gsap.utils.toArray<HTMLElement>(".project-card");
    projects.forEach((proj) => {
      const header = proj.querySelector(".proj-header");
      const mask = proj.querySelector(".proj-img-mask");
      const title = proj.querySelector(".proj-title");
      const caption = proj.querySelector(".proj-caption");
      if (!header || !mask || !title || !caption) return;

      gsap.set(mask, { clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set([title, caption], { opacity: 0, y: 20 });
      gsap.set(header, { opacity: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: proj, start: "top 85%" },
      });
      tl.to(header, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(
          mask,
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" },
          "-=0.2",
        )
        .to(
          [title, caption],
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.4",
        );
    });

    mm.add("(min-width: 768px)", () => {
      projects.forEach((proj, i) => {
        gsap.fromTo(
          proj,
          { y: 100 * (i + 1) },
          {
            scrollTrigger: {
              trigger: ".archive-container",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: -100 * (i + 1),
            ease: "none",
          },
        );
        const img = proj.querySelector(".proj-img");
        if (img) {
          gsap.to(img, {
            scrollTrigger: {
              trigger: proj,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            yPercent: 15,
            ease: "none",
          });
        }
      });
    });

    // 5. Testimonials stack (pin)
    const testSection = document.querySelector(
      "[data-element-id='testimonials-section']",
    );
    const testCards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
    if (testSection && testCards.length > 0) {
      gsap.fromTo(
        testCards[0],
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: testSection,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
      );

      testCards.forEach((card, i) => {
        if (i > 0) {
          gsap.set(card, {
            y: window.innerHeight * 0.8,
            opacity: 0,
            scale: 0.95,
          });
        }
        card.style.zIndex = String(i);
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: testSection,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2.5,
          pin: true,
          scrub: 1,
        },
      });

      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -140 : -220;

      testCards.forEach((card, i) => {
        if (i === 0) return;
        for (let j = 0; j < i; j++) {
          tl.to(
            testCards[j],
            {
              y: yOffset * (i - j),
              scale: 1 - 0.05 * (i - j),
              opacity: i - j === 1 ? 0.15 : 0,
              ease: "power2.inOut",
            },
            "step" + i,
          );
        }
        tl.fromTo(
          card,
          { y: window.innerHeight * 0.8, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, ease: "power2.inOut" },
          "step" + i,
        );
        tl.to({}, { duration: 0.4 });
      });
    }

    // 6. FAQ scrub entrance
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      const faqItems = gsap.utils.toArray("#faq-section .faq-list > div");
      const faqTitle = faqSection.querySelector("h2");
      const faqImgWrap = faqSection.querySelector(".faq-img-wrap");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: faqSection,
          start: "top 85%",
          end: "top 30%",
          scrub: 1.5,
        },
      });
      if (faqTitle) {
        tl.fromTo(
          faqTitle,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ease: "power3.out" },
          0,
        );
      }
      if (faqImgWrap) {
        tl.fromTo(
          faqImgWrap,
          { scale: 0.85, rotate: -8, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, ease: "power3.out" },
          0.1,
        );
      }
      tl.fromTo(
        faqItems,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.15, ease: "power2.out" },
        0.2,
      );
    }

    // 7. Contact
    gsap.to(".contact-bg-parallax img", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -20,
      ease: "none",
    });
    gsap.fromTo(
      ".contact-title",
      { opacity: 0, y: 50 },
      {
        scrollTrigger: { trigger: ".contact-container", start: "top 70%" },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      ".contact-form-wrap",
      { opacity: 0, y: 40 },
      {
        scrollTrigger: { trigger: ".contact-container", start: "top 60%" },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );

    // 8. Footer
    gsap.from(".footer-title", {
      scrollTrigger: { trigger: "footer", start: "top 80%" },
      scale: 0.9,
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "expo.out",
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
