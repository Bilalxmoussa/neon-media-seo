import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Best Website Builders for Small Business",
    "WordPress, Shopify, Squarespace, Wix — honest 2025 comparison."
  );
}
