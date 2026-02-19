import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Kanata",
    "Custom websites for Kanata businesses that rank on Google and drive results."
  );
}
