import { generateOGImage, size, contentType } from "@/lib/og";

export { size, contentType };

export default function OGImage() {
  return generateOGImage(
    "Web Design & SEO Blog",
    "Expert tips and guides to help Ottawa businesses build better websites and grow online."
  );
}
