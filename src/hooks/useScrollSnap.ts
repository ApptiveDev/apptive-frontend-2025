import { useEffect, useRef } from "react";

interface UseScrollSnapOptions {
  /**
   * 스냅 방향 설정
   * - 'y': 수직 스크롤 (기본값)
   * - 'x': 수평 스크롤
   * - 'both': 양방향
   */
  axis?: "y" | "x" | "both";

  /**
   * 스냅 강도
   * - 'mandatory': 항상 스냅 (기본값)
   * - 'proximity': 가까울 때만 스냅
   */
  type?: "mandatory" | "proximity";

  /**
   * 부드러운 스크롤 활성화
   */
  smooth?: boolean;
}

/**
 * 스크롤 스냅 컨테이너를 위한 Hook
 */
export const useScrollSnapContainer = ({
  axis = "y",
  type = "mandatory",
  smooth = true,
}: UseScrollSnapOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // scroll-snap-type 설정
    const snapType = axis === "both" ? "both" : axis;
    container.style.scrollSnapType = `${snapType} ${type}`;

    // 부드러운 스크롤 설정
    if (smooth) {
      container.style.scrollBehavior = "smooth";
    }

    // overflow 설정 (필요시)
    if (axis === "y") {
      container.style.overflowY = "scroll";
    } else if (axis === "x") {
      container.style.overflowX = "scroll";
    }

    return () => {
      container.style.scrollSnapType = "";
      container.style.scrollBehavior = "";
    };
  }, [axis, type, smooth]);

  return { containerRef };
};

/**
 * 스크롤 스냅 섹션을 위한 Hook
 * 각 섹션에 적용
 */
export const useScrollSnapSection = (
  align: "start" | "center" | "end" = "start"
) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.style.scrollSnapAlign = align;
    section.style.scrollSnapStop = "always";

    return () => {
      section.style.scrollSnapAlign = "";
      section.style.scrollSnapStop = "";
    };
  }, [align]);

  return { sectionRef };
};
