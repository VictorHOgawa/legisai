import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [visibilityLocked, setVisibilityLocked] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (!visibilityLocked) {
          setIsIntersecting(entry.isIntersecting);
        }
        if (entry.isIntersecting && !visibilityLocked) {
          setVisibilityLocked(true);
        }
      }),
    [ref, visibilityLocked],
  );

  useEffect(() => {
    if (ref?.current && !visibilityLocked) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [ref, observer, visibilityLocked]);

  return { isIntersecting, visibilityLocked };
}
