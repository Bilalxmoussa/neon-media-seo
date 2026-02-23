import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Google Business Profile Optimization",
    "Complete guide to optimizing your GBP for Ottawa local search."
  );
}
