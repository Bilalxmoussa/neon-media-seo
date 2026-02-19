import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Ottawa",
    "Websites that convert visitors into customers. Custom web design for Ottawa businesses."
  );
}
