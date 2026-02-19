import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "E-Commerce Website Design Ottawa",
    "High-converting online stores for Ottawa businesses with secure payments."
  );
}
