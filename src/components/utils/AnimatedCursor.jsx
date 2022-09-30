import React from "react";

function useEventListener(eventName, handler, element = document) {
  ///if (typeof window !== "undefined") {
  const savedHandler = React.useRef();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return () => {};

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
  /// }
}

export function AnimatedCursor({
  color = "220, 90, 90",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  ////if (typeof window !== "undefined") {
  const cursorOuterRef = React.useRef();
  const cursorInnerRef = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  const [coords, setCoords] = React.useState({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = React.useState(true);
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveClickable, setIsActiveClickable] = React.useState(false);
  let endX = React.useRef(0);
  let endY = React.useRef(0);

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = clientY + "px";
    cursorInnerRef.current.style.left = clientX + "px";
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (
        !!previousTimeRef.current &&
        !!cursorOuterRef.current &&
        cursorOuterRef.current !== null
      ) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        cursorOuterRef.current.style.top = coords.y + "px";
        cursorOuterRef.current.style.left = coords.x + "px";
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef] // eslint-disable-line
  );

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, [animateOuterCursor]);

  const onMouseDown = React.useCallback(() => setIsActive(true), []);
  const onMouseUp = React.useCallback(() => setIsActive(false), []);
  const onMouseEnter = React.useCallback(() => setIsVisible(true), []);
  const onMouseLeave = React.useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove, document);
  useEventListener("mousedown", onMouseDown, document);
  useEventListener("mouseup", onMouseUp, document);
  useEventListener("mouseenter", onMouseEnter, document);
  useEventListener("mouseleave", onMouseLeave, document);

  React.useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current.style.transform = "scale(1)";
      cursorOuterRef.current.style.transform = "scale(1)";
    }
  }, [innerScale, outerScale, isActive]);

  React.useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  React.useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef.current.style.opacity = 1;
    } else {
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  // Hide / Show global cursor

  document.body.style.cursor = "none";

  React.useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link, .swiper-pagination-bullet'
    );
    const widget = document.getElementById("widget");
    // const insta = document.getElementById("insta")
    // if (insta) {
    //   insta.onmouseenter = () => {
    //     cursorInnerRef.current.style.cursor =url('/static/arrow-down.png'), auto;
    //     cursorOuterRef.current.style.opacity = 0
    //   }
    // }
    if (widget) {
      widget.onmouseleave = () => {
        cursorInnerRef.current.style.opacity = 1;
        cursorOuterRef.current.style.opacity = 1;
      };
      widget.onmouseenter = () => {
        cursorInnerRef.current.style.opacity = 0;
        cursorOuterRef.current.style.opacity = 0;
      };
    }

    animateOuterCursor();
    clickables.forEach((el) => {
      el.style.cursor = "none";

      el.addEventListener("mouseover", () => {
        setIsActive(true);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  const styles = {
    cursor: {
      zIndex: 10010,
      position: "fixed",
      opacity: 1,
      pointerEvents: "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      zIndex: 10010,
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
      mixBlendMode: "difference",
    },
    cursorOuter: {
      zIndex: 10010,
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
      mixBlendMode: "difference",
    },
  };

  return (
    <React.Fragment>
      <div
        ref={cursorOuterRef}
        style={styles.cursorOuter}
        className="desktop-display"
      />
      <div
        ref={cursorInnerRef}
        style={styles.cursorInner}
        className="desktop-display"
      />
    </React.Fragment>
  );
  /// }
}
