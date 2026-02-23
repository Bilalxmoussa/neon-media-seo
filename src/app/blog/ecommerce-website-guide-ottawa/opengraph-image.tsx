import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "E-Commerce Website Guide for Ottawa",
    "Everything you need to launch a successful online store in Ottawa."
  );
}
