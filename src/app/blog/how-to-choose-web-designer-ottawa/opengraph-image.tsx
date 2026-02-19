import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "How to Choose a Web Designer in Ottawa",
    "What to look for, red flags to avoid, and questions to ask."
  );
}
