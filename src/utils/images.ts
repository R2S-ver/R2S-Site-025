import type { ImageMetadata } from "astro";

const images = import.meta.glob(
  "/src/content/entries/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

export type ProjectImage = ImageMetadata | string;

/**
 * Resolve a content image to its Astro ImageMetadata object (or a plain
 * URL for the public/ fallbacks). Use this when the consumer wants to
 * hand the image to `astro:assets` for optimized output.
 */
export function getProjectImageMeta(
  id: string,
  filename: string,
): ProjectImage | null {
  // Fashion-design PNGs are served raw from /public to preserve alpha.
  if (id === "fashion-design" && filename.endsWith(".png")) {
    return `/art/fashion-design/${filename}`;
  }

  const key = Object.keys(images).find(
    (path) =>
      path.includes(`/entries/${id}/`) &&
      path.endsWith(filename),
  );

  if (!key) {
    console.warn("Image not found:", id, filename);
    return null;
  }

  return images[key] as ProjectImage;
}

/**
 * Compatibility accessor for callers that only need the raw resolved
 * value (Astro image globs yield ImageMetadata objects at runtime).
 */
export function getProjectImage(
  id: string,
  filename: string,
): ProjectImage | null {
  return getProjectImageMeta(id, filename);
}

/**
 * Always returns the final URL string for plain <img> rendering.
 */
export function getProjectImageUrl(
  id: string,
  filename: string,
): string | null {
  const raw = getProjectImageMeta(id, filename);

  if (!raw) return null;
  return typeof raw === "string" ? raw : String(raw.src);
}
