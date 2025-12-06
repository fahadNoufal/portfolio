import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from '@gsap/react'

import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";
import "./dsProjects.css"; // We will create this file next

// Register GSAP plugins
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

// --- Configuration Data ---
const items = [
  "Chromatic Loopscape",
  "Solar Bloom",
  "Neon Handscape",
  "Echo Discs",
  "Void Gaze",
  "Gravity Sync",
  "Heat Core",
  "Fractal Mirage",
  "Nova Pulse",
  "Sonic Horizon",
  "Dream Circuit",
  "Lunar Mesh",
  "Radiant Dusk",
  "Pixel Drift",
  "Vortex Bloom",
  "Shadow Static",
  "Crimson Phase",
  "Retro Cascade",
  "Photon Fold",
  "Zenith Flow",
];

const imageUrls = [
  "https://cdn.cosmos.so/0f164449-f65e-4584-9d62-a9b3e1f4a90a?format=jpeg",
  "https://cdn.cosmos.so/74ccf6cc-7672-4deb-ba13-1727b7dc6146?format=jpeg",
  "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg",
  "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg",
  "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg",
  "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg",
  "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg",
];

const DataScienceProjects = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const paneRef = useRef(null);

  // We use a ref to store all the "global" logic variables to keep them accessible
  // inside the effect without stale closures, and to clean them up on unmount.
  const engineRef = useRef({
    settings: {
      baseWidth: 400,
      smallHeight: 330,
      largeHeight: 500,
      itemGap: 65,
      hoverScale: 1.05,
      expandedScale: 0.4,
      dragEase: 0.075,
      momentumFactor: 200,
      bufferZone: 3,
      borderRadius: 0,
      vignetteSize: 0,
      vignetteStrength: 0.7,
      overlayOpacity: 0.9,
      overlayEaseDuration: 0.8,
      zoomDuration: 0.6,
    },
    state: {
      isDragging: false,
      startX: 0,
      startY: 0,
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      dragVelocityX: 0,
      dragVelocityY: 0,
      lastDragTime: 0,
      mouseHasMoved: false,
      visibleItems: new Set(),
      lastUpdateTime: 0,
      lastX: 0,
      lastY: 0,
      isExpanded: false,
      activeItem: null,
      activeItemId: null,
      canDrag: true,
      originalPosition: null,
      expandedItem: null,
      overlayAnimation: null,
      titleSplit: null,
      reqId: null, // requestAnimationFrame ID
    },
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const projectTitleElement = titleRef.current;
    const engine = engineRef.current;
    const { settings, state } = engine;

    // Derived variables
    let itemSizes = [
      { width: settings.baseWidth, height: settings.smallHeight },
      { width: settings.baseWidth, height: settings.largeHeight },
    ];
    let columns = 4;
    const itemCount = items.length;
    let cellWidth = settings.baseWidth + settings.itemGap;
    let cellHeight =
      Math.max(settings.smallHeight, settings.largeHeight) + settings.itemGap;

    // --- Helper Functions ---

    const updateCSSVariables = () => {
      document.documentElement.style.setProperty(
        "--border-radius",
        `${settings.borderRadius}px`
      );
      document.documentElement.style.setProperty(
        "--vignette-size",
        `${settings.vignetteSize}px`
      );
      document.documentElement.style.setProperty(
        "--hover-scale",
        settings.hoverScale
      );

      // Page vignette logic
      const strength = settings.vignetteStrength;
      const size = settings.vignetteSize;

      document.documentElement.style.setProperty(
        "--page-vignette-size",
        `${size * 1.5}px`
      );
      document.documentElement.style.setProperty(
        "--page-vignette-color",
        `rgba(0,0,0,${strength * 0.7})`
      );

      document.documentElement.style.setProperty(
        "--page-vignette-strong-size",
        `${size * 0.75}px`
      );
      document.documentElement.style.setProperty(
        "--page-vignette-strong-color",
        `rgba(0,0,0,${strength * 0.85})`
      );

      document.documentElement.style.setProperty(
        "--page-vignette-extreme-size",
        `${size * 0.4}px`
      );
      document.documentElement.style.setProperty(
        "--page-vignette-extreme-color",
        `rgba(0,0,0,${strength})`
      );

      // Update existing items hover transition
      const items = document.querySelectorAll(".item img");
      items.forEach((img) => {
        img.style.transition = "transform 0.3s ease";
      });
    };

    // --- Core Logic ---

    const getItemSize = (row, col) => {
      const sizeIndex = Math.abs((row * columns + col) % itemSizes.length);
      return itemSizes[sizeIndex];
    };

    const getItemId = (col, row) => `${col},${row}`;

    const getItemPosition = (col, row) => ({
      x: col * cellWidth,
      y: row * cellHeight,
    });

    const setAndAnimateTitle = (title) => {
      if (state.titleSplit) state.titleSplit.revert();
      projectTitleElement.textContent = title;
      state.titleSplit = new SplitType(projectTitleElement, { types: "words" });
      gsap.set(state.titleSplit.words, { y: "100%" });
    };

    const animateTitleIn = () => {
      if (state.titleSplit && state.titleSplit.words) {
        gsap.fromTo(
          state.titleSplit.words,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
        );
      }
    };

    const animateTitleOut = () => {
      if (state.titleSplit && state.titleSplit.words) {
        gsap.to(state.titleSplit.words, {
          y: "-100%",
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    };

    const animateOverlayIn = () => {
      if (state.overlayAnimation) state.overlayAnimation.kill();
      state.overlayAnimation = gsap.to(overlay, {
        opacity: settings.overlayOpacity,
        duration: settings.overlayEaseDuration,
        ease: "power2.inOut",
        overwrite: true,
      });
    };

    const animateOverlayOut = () => {
      if (state.overlayAnimation) state.overlayAnimation.kill();
      state.overlayAnimation = gsap.to(overlay, {
        opacity: 0,
        duration: settings.overlayEaseDuration,
        ease: "power2.inOut",
      });
    };

    // --- Interaction Logic (Expand/Collapse) ---

    const closeExpandedItem = () => {
      if (!state.expandedItem || !state.originalPosition) return;

      animateTitleOut();
      animateOverlayOut();

      // Fade in other items
      document.querySelectorAll(".item").forEach((el) => {
        if (el.id !== state.activeItemId) {
          gsap.to(el, {
            opacity: 1,
            duration: settings.overlayEaseDuration,
            delay: 0.3,
            ease: "power2.inOut",
          });
        }
      });

      const originalItem = document.getElementById(state.activeItemId);
      if (originalItem) {
        const nameElement = originalItem.querySelector(".item-name");
        const numberElement = originalItem.querySelector(".item-number");
        nameElement.textContent = state.originalPosition.nameText;
        numberElement.textContent = state.originalPosition.numberText;
        originalItem.querySelector(".item-caption").style.opacity = "0";
      }

      const {
        rect: originalRect,
        width: originalWidth,
        height: originalHeight,
      } = state.originalPosition;

      gsap.to(state.expandedItem, {
        width: originalWidth,
        height: originalHeight,
        x: originalRect.left + originalWidth / 2 - window.innerWidth / 2,
        y: originalRect.top + originalHeight / 2 - window.innerHeight / 2,
        duration: settings.zoomDuration,
        ease: "hop",
        onComplete: () => {
          if (originalItem) {
            // Reconstruct clone for animation
            const captionElement = originalItem.querySelector(".item-caption");
            const captionClone = document.createElement("div");
            captionClone.className = "caption-clone";
            captionClone.innerHTML = captionElement.innerHTML;

            const captionRect = captionElement.getBoundingClientRect();
            captionClone.style.position = "fixed";
            captionClone.style.left = `${captionRect.left}px`;
            captionClone.style.bottom = `${
              window.innerHeight - captionRect.bottom
            }px`;
            captionClone.style.width = `${captionRect.width}px`;
            captionClone.style.padding = "10px";
            captionClone.style.zIndex = "10002";
            document.body.appendChild(captionClone);

            const nameClone = captionClone.querySelector(".item-name");
            const numberClone = captionClone.querySelector(".item-number");
            nameClone.style.overflow = "hidden";
            numberClone.style.overflow = "hidden";

            const nameCloneSplit = new SplitType(nameClone, { types: "words" });
            const numberCloneSplit = new SplitType(numberClone, {
              types: "words",
            });

            gsap.set([nameCloneSplit.words, numberCloneSplit.words], {
              y: "100%",
              opacity: 0,
            });

            gsap.to(nameCloneSplit.words, {
              y: "0%",
              opacity: 1,
              duration: 0.7,
              stagger: 0.03,
              ease: "power3.out",
            });
            gsap.to(numberCloneSplit.words, {
              y: "0%",
              opacity: 1,
              duration: 0.7,
              stagger: 0.02,
              delay: 0.05,
              ease: "power3.out",
              onComplete: () => {
                captionElement.style.opacity = "1";
                if (captionClone.parentNode)
                  document.body.removeChild(captionClone);
              },
            });
          }

          if (state.expandedItem && state.expandedItem.parentNode) {
            document.body.removeChild(state.expandedItem);
          }

          if (originalItem) originalItem.style.visibility = "visible";

          // Reset State
          state.expandedItem = null;
          state.isExpanded = false;
          state.activeItem = null;
          state.originalPosition = null;
          state.activeItemId = null;
          state.canDrag = true;
          container.style.cursor = "grab";
          state.dragVelocityX = 0;
          state.dragVelocityY = 0;
          overlay.classList.remove("active");
        },
      });
    };

    const expandItem = (item, itemIndex) => {
      state.isExpanded = true;
      state.activeItem = item;
      state.activeItemId = item.id;
      state.canDrag = false;
      container.style.cursor = "auto";

      const imgSrc = item.querySelector("img").src;
      const titleIndex = itemIndex % items.length;
      const itemWidth = parseInt(item.dataset.width);
      const itemHeight = parseInt(item.dataset.height);

      setAndAnimateTitle(items[titleIndex]);

      // Caption Logic
      const nameElement = item.querySelector(".item-name");
      const numberElement = item.querySelector(".item-number");
      const nameText = nameElement.textContent;
      const numberText = numberElement.textContent;

      const captionClone = item.querySelector(".item-caption").cloneNode(true);
      captionClone.classList.add("caption-clone");

      // Setup clones for animation
      const nameClone = captionClone.querySelector(".item-name");
      const numberClone = captionClone.querySelector(".item-number");
      const nameCloneSplit = new SplitType(nameClone, { types: "words" });
      const numberCloneSplit = new SplitType(numberClone, { types: "words" });

      const captionRect = item
        .querySelector(".item-caption")
        .getBoundingClientRect();
      captionClone.style.left = `${captionRect.left}px`;
      captionClone.style.bottom = `${
        window.innerHeight - captionRect.bottom
      }px`;
      captionClone.style.width = `${captionRect.width}px`;
      captionClone.style.zIndex = "10002";
      document.body.appendChild(captionClone);

      item.querySelector(".item-caption").style.opacity = "0";

      gsap.to(nameCloneSplit.words, {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.in",
      });
      gsap.to(numberCloneSplit.words, {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        delay: 0.05,
        ease: "power3.in",
        onComplete: () => {
          if (captionClone.parentNode) document.body.removeChild(captionClone);
        },
      });

      const rect = item.getBoundingClientRect();
      state.originalPosition = {
        id: item.id,
        rect,
        imgSrc,
        width: itemWidth,
        height: itemHeight,
        nameText,
        numberText,
      };

      overlay.classList.add("active");
      animateOverlayIn();

      // Create Expanded Item
      const expandedItem = document.createElement("div");
      //   document.querySelector(".ds-proj").appendChild(expandedItem);
      expandedItem.className = "expanded-item";
      expandedItem.style.width = `${itemWidth}px`;
      expandedItem.style.height = `${itemHeight}px`;
      expandedItem.style.zIndex = "10000";
      expandedItem.style.borderRadius = `var(--border-radius, 0px)`;

      const img = document.createElement("img");
      img.src = imgSrc;
      expandedItem.appendChild(img);

      expandedItem.addEventListener("click", closeExpandedItem);
      document.body.appendChild(expandedItem);
      state.expandedItem = expandedItem;

      // Fade out other items
      document.querySelectorAll(".item").forEach((el) => {
        if (el !== state.activeItem) {
          gsap.to(el, {
            opacity: 0,
            duration: settings.overlayEaseDuration,
            ease: "power2.inOut",
          });
        }
      });

      const viewportWidth = window.innerWidth;
      const targetWidth = viewportWidth * settings.expandedScale;
      const aspectRatio = itemHeight / itemWidth;
      const targetHeight = targetWidth * aspectRatio;

      gsap.delayedCall(0.5, animateTitleIn);

      gsap.fromTo(
        expandedItem,
        {
          width: itemWidth,
          height: itemHeight,
          x: rect.left + itemWidth / 2 - window.innerWidth / 2,
          y: rect.top + itemHeight / 2 - window.innerHeight / 2,
        },
        {
          width: targetWidth,
          height: targetHeight,
          x: 0,
          y: 0,
          duration: settings.zoomDuration,
          ease: "hop",
        }
      );
    };

    const handleItemClick = (item, itemNum) => {
      if (state.isExpanded) {
        if (state.expandedItem) closeExpandedItem();
      } else {
        expandItem(item, itemNum);
      }
    };

    // --- Core Grid Logic ---

    const updateVisibleItems = () => {
      const buffer = settings.bufferZone;
      const viewWidth = window.innerWidth * (1 + buffer);
      const viewHeight = window.innerHeight * (1 + buffer);

      const startCol = Math.floor(
        (-state.currentX - viewWidth / 2) / cellWidth
      );
      const endCol = Math.ceil((-state.currentX + viewWidth * 1.5) / cellWidth);
      const startRow = Math.floor(
        (-state.currentY - viewHeight / 2) / cellHeight
      );
      const endRow = Math.ceil(
        (-state.currentY + viewHeight * 1.5) / cellHeight
      );

      const currentItems = new Set();

      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          const itemId = getItemId(col, row);
          currentItems.add(itemId);

          if (state.visibleItems.has(itemId)) continue;
          if (state.activeItemId === itemId && state.isExpanded) continue;

          // Create Item
          const itemSize = getItemSize(row, col);
          const position = getItemPosition(col, row);
          const itemNum = Math.abs((row * columns + col) % itemCount);

          const item = document.createElement("div");
          item.className = "item";
          item.id = itemId;
          item.style.width = `${itemSize.width}px`;
          item.style.height = `${itemSize.height}px`;
          item.style.left = `${position.x}px`;
          item.style.top = `${position.y}px`;
          item.dataset.col = col;
          item.dataset.row = row;
          item.dataset.width = itemSize.width;
          item.dataset.height = itemSize.height;

          const imageContainer = document.createElement("div");
          imageContainer.className = "item-image-container";

          const img = document.createElement("img");
          img.src = imageUrls[itemNum % imageUrls.length];
          img.alt = `Image ${itemNum + 1}`;
          // Apply current hover scale logic
          img.style.transition = "transform 0.3s ease";

          imageContainer.appendChild(img);
          item.appendChild(imageContainer);

          const captionElement = document.createElement("div");
          captionElement.className = "item-caption";

          const nameElement = document.createElement("div");
          nameElement.className = "item-name";
          nameElement.textContent = items[itemNum];

          const numberElement = document.createElement("div");
          numberElement.className = "item-number";
          numberElement.textContent = `#${(itemNum + 1)
            .toString()
            .padStart(5, "0")}`;

          captionElement.appendChild(nameElement);
          captionElement.appendChild(numberElement);
          item.appendChild(captionElement);

          item.addEventListener("click", () => {
            if (state.mouseHasMoved || state.isDragging) return;
            handleItemClick(item, itemNum);
          });

          canvas.appendChild(item);
          state.visibleItems.add(itemId);
        }
      }

      // Cleanup
      state.visibleItems.forEach((itemId) => {
        if (
          !currentItems.has(itemId) ||
          (state.activeItemId === itemId && state.isExpanded)
        ) {
          const item = document.getElementById(itemId);
          if (item && item.parentNode === canvas) {
            canvas.removeChild(item);
          }
          state.visibleItems.delete(itemId);
        }
      });
    };

    const animate = () => {
      if (state.canDrag) {
        const ease = settings.dragEase;
        state.currentX += (state.targetX - state.currentX) * ease;
        state.currentY += (state.targetY - state.currentY) * ease;

        if (canvas) {
          canvas.style.transform = `translate(${state.currentX}px, ${state.currentY}px)`;
        }

        const now = Date.now();
        const distMoved = Math.sqrt(
          Math.pow(state.currentX - state.lastX, 2) +
            Math.pow(state.currentY - state.lastY, 2)
        );

        if (distMoved > 100 || now - state.lastUpdateTime > 120) {
          updateVisibleItems();
          state.lastX = state.currentX;
          state.lastY = state.currentY;
          state.lastUpdateTime = now;
        }
      }
      state.reqId = requestAnimationFrame(animate);
    };

    // --- Event Listeners ---

    const onMouseDown = (e) => {
      if (!state.canDrag) return;
      state.isDragging = true;
      state.mouseHasMoved = false;
      state.startX = e.clientX;
      state.startY = e.clientY;
      container.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (!state.isDragging || !state.canDrag) return;
      const dx = e.clientX - state.startX;
      const dy = e.clientY - state.startY;

      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) state.mouseHasMoved = true;

      const now = Date.now();
      const dt = Math.max(10, now - state.lastDragTime);
      state.lastDragTime = now;

      state.dragVelocityX = dx / dt;
      state.dragVelocityY = dy / dt;

      state.targetX += dx;
      state.targetY += dy;
      state.startX = e.clientX;
      state.startY = e.clientY;
    };

    const onMouseUp = () => {
      if (!state.isDragging) return;
      state.isDragging = false;
      if (state.canDrag) {
        container.style.cursor = "grab";
        if (
          Math.abs(state.dragVelocityX) > 0.1 ||
          Math.abs(state.dragVelocityY) > 0.1
        ) {
          state.targetX += state.dragVelocityX * settings.momentumFactor;
          state.targetY += state.dragVelocityY * settings.momentumFactor;
        }
      }
    };

    const onTouchStart = (e) => {
      if (!state.canDrag) return;
      state.isDragging = true;
      state.mouseHasMoved = false;
      state.startX = e.touches[0].clientX;
      state.startY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!state.isDragging || !state.canDrag) return;
      const dx = e.touches[0].clientX - state.startX;
      const dy = e.touches[0].clientY - state.startY;

      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) state.mouseHasMoved = true;

      state.targetX += dx;
      state.targetY += dy;
      state.startX = e.touches[0].clientX;
      state.startY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      state.isDragging = false;
    };

    const onResize = () => {
      if (state.isExpanded && state.expandedItem && state.originalPosition) {
        const viewportWidth = window.innerWidth;
        const targetWidth = viewportWidth * settings.expandedScale;
        const originalWidth = state.originalPosition.width;
        const originalHeight = state.originalPosition.height;
        const aspectRatio = originalHeight / originalWidth;
        const targetHeight = targetWidth * aspectRatio;

        gsap.to(state.expandedItem, {
          width: targetWidth,
          height: targetHeight,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        updateVisibleItems();
      }
    };

    const onKeyDown = (e) => {
      if ((e.key === "h" || e.key === "H") && paneRef.current) {
        const el = paneRef.current.element;
        el.style.display = el.style.display === "none" ? "" : "none";
      }
    };

    const onOverlayClick = () => {
      if (state.isExpanded) closeExpandedItem();
    };

    // --- Bootstrapping ---

    updateCSSVariables();
    updateVisibleItems();
    animate();
    // setTimeout(initTweakpane, 500);

    // Attach listeners
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    overlay.addEventListener("click", onOverlayClick);

    // Cleanup
    return () => {
      cancelAnimationFrame(state.reqId);
      if (paneRef.current) paneRef.current.dispose();

      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      overlay.removeEventListener("click", onOverlayClick);

      if (state.expandedItem && state.expandedItem.parentNode) {
        document.body.removeChild(state.expandedItem);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.to(".work-letters", {
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".work-txt-container",
        start: "top 45%",
        end: "50% top",
        toggleActions: "play play play reverse",
      },
    });
  });

  useGSAP(() => {
    gsap.from(".ds-proj-root", {
      marginTop: 250,
      ease: "power4.out",
      duration: 1.6,
      opacity: 0.5,
      scrollTrigger: {
        // trigger: ".work-txt-container",
        trigger: ".ds-proj-root",
        start: "top bottom",
        end: "50% top",
        toggleActions: "play pause pause reverse",
      },
    });
  });

  const workText = 'WORKS'.split('').map((char, index) => (
    <div className='work-letters leading-[90%] opacity-0 translate-y-[100%] bg-gradient-to-t from-[#333] to-white bg-clip-text text-transparent' key={index}>
      <div className='inline-block'>{char}</div>
    </div>
  ))
  return (
    <div>
      <h1 className="work-txt-container h-[100dvh] flex justify-center items-center font-humane-black text-[12.5rem] sm:text-[15rem] md:text-[20rem] lg:text-[30rem] xl:text-[40rem]">
        <span className="flex overflow-hidden pt-8">{workText}</span>
      </h1>
      <div className="ds-proj-section mt-[300px] h-[100svh]">
        <div className="ds-proj-root">
          <div className="ds-proj">
            {/* --- Header Section --- */}
            <div className="header">
              <div className="nav-section">
                <div className="logo-container">
                  <div className="logo-circles">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                  </div>
                </div>
              </div>

              <div className="values-section">
                <h3>+Menu</h3>
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Clarity
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Simplicity
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Creativity
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Authenticity
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Connect
                    </a>
                  </li>
                </ul>
              </div>

              <div className="location-section">
                <h3>+Location</h3>
                <p>6357 Selma Ave</p>
                <p>Los Angeles</p>
                <p>CA 90028</p>
              </div>

              <div className="contact-section">
                <h3>+Get In Touch</h3>
                <p>(310) 456-7890</p>
                <p>
                  <a href="mailto:hi@filip.fyi">hi@filip.fyi</a>
                </p>
              </div>

              <div className="social-section">
                <h3>+Social</h3>
                <ul>
                  <li>
                    <a
                      href="https://instagram.com/filipz__"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/filipz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      X / Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/filipzrnzevic"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* --- Main Animation Container --- */}
            {/* We attach containerRef here for the drag events */}
            <div className="container" ref={containerRef}>
              {/* We attach canvasRef here for GSAP to move and append items */}
              <div className="canvas" id="canvas" ref={canvasRef}></div>
              {/* We attach overlayRef here for the fade-in background */}
              <div className="overlay" id="overlay" ref={overlayRef}></div>
            </div>

            {/* --- Project Title --- */}
            <div className="project-title">
              {/* We attach titleRef here for SplitType animation */}
              <p ref={titleRef}></p>
            </div>

            {/* --- Page Vignette Effects --- */}
            {/* These correspond to the settings controlled by Tweakpane */}
            <div className="page-vignette-container">
              <div className="page-vignette"></div>
              <div className="page-vignette-strong"></div>
              <div className="page-vignette-extreme"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceProjects;
