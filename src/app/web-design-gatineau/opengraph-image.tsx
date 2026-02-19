import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Gatineau",
    "Bilingual websites for Gatineau businesses in the National Capital Region."
  );
}
