import { cn } from "@/lib/utils";

/** A small, original kitchen-machine illustration, drawn for this site. */
export function MachineDrawing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 112"
      fill="none"
      aria-hidden="true"
      className={cn("machine-drawing", className)}
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path className="machine-steam" d="M41 20c-6-7 6-9 0-16M54 19c-6-7 6-9 0-16" />
        <path d="M24 37h47l-5 38H32z" fill="currentColor" fillOpacity=".07" />
        <path d="M21 36h53v-5H21zM40 30v-5h15v5M72 41h8c12 0 10 24-11 23M35 42l3 25M31 75l-10 20c-2 5 1 9 6 9h48c5 0 8-4 6-9L66 75" />
        <rect x="36" y="82" width="23" height="14" rx="3" fill="currentColor" fillOpacity=".12" />
        <path d="M42 87h11M42 91h7M30 108h-7M76 108h-7" />
        <circle cx="68" cy="90" r="4" />
      </g>
    </svg>
  );
}
