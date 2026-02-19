import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Why Your Business Needs a Website in 2025",
    "The case for investing in a professional website is stronger than ever."
  );
}
