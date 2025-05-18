import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function averageWithUnit(value1: string, value2: string): string {
  const unitMatch = value1.match(/[a-zA-Z]+$/);
  const unit = unitMatch ? unitMatch[0] : "";

  const num1 = parseFloat(value1.replace(unit, ""));
  const num2 = parseFloat(value2.replace(unit, ""));

  if (!value2.endsWith(unit)) {
    throw new Error("หน่วยของค่าทั้งสองไม่ตรงกัน");
  }

  const avg = (num1 + num2) / 2;

  return `${avg.toFixed(2)}${unit}`;
}
