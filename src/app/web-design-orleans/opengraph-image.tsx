import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Orleans",
    "Custom websites for Orleans businesses in Ottawa's east end."
  );
}
