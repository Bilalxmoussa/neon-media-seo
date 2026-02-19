import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Law Firm Website Design Ottawa",
    "Authority-building websites for Ottawa law firms that convert visitors into clients."
  );
}
