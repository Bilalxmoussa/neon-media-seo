import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "15 SEO Tips for Small Businesses",
    "Practical SEO strategies Ottawa small businesses can implement today."
  );
}
