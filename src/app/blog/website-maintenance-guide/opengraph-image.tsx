import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Website Maintenance Guide",
    "Keep your website secure, fast, and performing at its best."
  );
}
