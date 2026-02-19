import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Restaurant Website Design Ottawa",
    "Custom websites for Ottawa restaurants with online ordering and local SEO."
  );
}
