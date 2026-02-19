import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Contractor Website Design Ottawa",
    "Lead-generating websites for Ottawa contractors that rank on Google."
  );
}
