import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Local SEO Guide for Ottawa Businesses",
    "Complete guide to ranking higher on Google in Ottawa in 2025."
  );
}
