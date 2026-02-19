import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Barrhaven",
    "Professional websites for Barrhaven small businesses and local services."
  );
}
