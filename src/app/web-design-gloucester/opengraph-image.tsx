import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Gloucester",
    "Custom websites for Gloucester businesses and professional services."
  );
}
