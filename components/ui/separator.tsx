// components/ui/separator.tsx
import * as React from "react";

export function Separator({ className }: { className?: string }) {
  return <hr className={`my-4 border-border ${className ?? ""}`} />;
}

// para compatibility con el import { Separator } from "@/components/ui/separator";
export default Separator;
