import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Dental Website Design Ottawa",
    "Professional websites for Ottawa dental practices with online booking."
  );
}
