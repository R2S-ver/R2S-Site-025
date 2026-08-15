import { artImageMap } from "./art-images.generated";

/**
 * Shared art-image discovery used by all three /art pages.
 *
 * `scripts/optimize-art.mjs` pre-generates lossless webp variants in
 * `public/art-optimized/` and records them in the generated manifest.
 * Every optimized variant is guaranteed to be at least 50% of the
 * original file size (user policy); anything else falls back to the
 * original asset.
 */
const artImages = import.meta.glob(
  "/src/content/entries/{illustrations,product-posters,fashion-design,food-art}/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);

export interface ArtImageFile {
  folder: string;
  filename: string;
  src: string;
}

function toSrc(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "src" in value) {
    const src = (value as { src: unknown }).src;
    return typeof src === "string" ? src : null;
  }
  return null;
}

export function getArtImages(): ArtImageFile[] {
  const images: ArtImageFile[] = [];

  for (const [path, mod] of Object.entries(artImages) as [
    string,
    unknown,
  ][]) {
    const parts = path.split("/");
    const filename = parts.pop();
    const folder = parts.pop();
    if (!filename || !folder) continue;
    if (filename === "cover.png") continue;

    const key = `${folder}/${filename}`;
    const optimized = artImageMap[key] ?? toSrc(mod);
    if (!optimized) continue;

    images.push({ folder, filename, src: optimized });
  }

  return images;
}
