import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design Nepean",
    "Professional websites for Nepean businesses along Merivale Road and beyond."
  );
}
