import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "How Much Does a Website Cost in Ottawa?",
    "2025 pricing guide for Ottawa businesses — from $1,500 to $15,000+."
  );
}
