import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Real Estate Website Design Ottawa",
    "Custom real estate websites with IDX/MLS integration for Ottawa agents."
  );
}
