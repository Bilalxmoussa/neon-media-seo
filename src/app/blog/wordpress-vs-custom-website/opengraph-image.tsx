import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "WordPress vs Custom Website",
    "Which is right for your business? Honest comparison of cost, speed, and SEO."
  );
}
