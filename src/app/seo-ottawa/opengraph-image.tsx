import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "SEO Services Ottawa",
    "Rank higher on Google and drive more organic traffic with proven local SEO strategies."
  );
}
