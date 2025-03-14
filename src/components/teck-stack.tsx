import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface Props {
  className?: string;
  icon: React.ElementType;
  label: string;
  children?: React.ReactNode;
}

export function TechStack({ className, icon: Icon, children }: Props) {
  return (
    <div
      className={cn(
        className,
        "group relative z-20 mt-7 flex flex-col items-center",
      )}
    >
      <Icon className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 transition hover:fill-zinc-200" />
      {children && (
        <span className="absolute top-[-10px] z-20 whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs text-white opacity-0 transition-all duration-500 group-hover:translate-y-[-15px] group-hover:opacity-100 dark:bg-white dark:text-black">
          {children}
        </span>
      )}
    </div>
  );
}
