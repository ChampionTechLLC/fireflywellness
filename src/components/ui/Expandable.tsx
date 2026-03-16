"use client";

import { useId, useMemo, useState } from "react";
import { link } from "@/styles";

type ExpandableProps = {
  collapsed: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
};

export function Expandable({
  collapsed,
  children,
  className = "",
  moreLabel = "See more",
  lessLabel = "See less",
}: ExpandableProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  const hasExpandableContent = useMemo(() => {
    if (children === null || children === undefined) return false;
    if (typeof children === "boolean") return false;
    if (Array.isArray(children)) return children.length > 0;
    return true;
  }, [children]);

  if (!hasExpandableContent) {
    return <div className={className}>{collapsed}</div>;
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <div>{collapsed}</div>

      {expanded && (
        <div id={contentId} className="flex flex-col gap-2">
          {children}
        </div>
      )}

      <button
        type="button"
        className={`${link.root} self-start bg-transparent p-0`}
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  );
}

