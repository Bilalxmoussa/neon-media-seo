import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Website Speed Optimization Guide",
    "How to make your website load in under 2 seconds for better rankings."
  );
}
