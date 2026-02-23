import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "10 Best Web Design Agencies in Ottawa",
    "A comprehensive guide to choosing the right web design agency for your business."
  );
}
