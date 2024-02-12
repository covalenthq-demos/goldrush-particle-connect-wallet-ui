import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const COVALENT_API_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY

export const COLORS = {
  "slate": "#64748b",
  "gray": "#6b7280",
  "zinc": "#71717a",
  "neutral": "#737373",
  "stone": "#78716c",
  "red": "#ef4444",
  "orange": "#f97316",
  "amber": "#f59e0b",
  "yellow": "#eab308",
  "lime": "#84cc16",
  "green": "#22c55e",
  "emerald": "#10b981",
  "teal": "#14b8a6",
  "cyan": "#06b6d4",
  "sky": "#0ea5e9",
  "blue": "#3b82f6",
  "indigo": "#6366f1",
  "violet": "#8b5cf6",
  "purple": "#a855f7",
  "fuchsia": "#d946ef",
  "pink": "#ec4899",
  "rose": "#f43f5e"
}

export const BORDER_RADIUS = {
  "none": "0.0rem",
  "small": "0.25rem",
  "medium": "0.5rem",
  "large": "0.75rem",
  "full": "1rem"
};