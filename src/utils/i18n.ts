import type { CollectionEntry } from "astro:content";

export type Language = "en" | "zh";

export const defaultLanguage: Language = "en";

/**
 * Get the current language from the URL.
 *
 * /lab
 * /projects
 * /lab/project
 *       → en
 *
 * /zh/lab
 * /zh/projects
 * /zh/lab/project
 *       → zh
 */
export function getLanguageFromPath(
  pathname: string
): Language {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    return "zh";
  }

  return "en";
}

/**
 * Convert an existing path to another language.
 *
 * /lab/project
 *      → /zh/lab/project
 *
 * /zh/lab/project
 *      → /lab/project
 */
export function getLocalizedPath(
  pathname: string,
  language: Language
): string {
  const cleanPath =
    pathname.replace(/^\/zh/, "") || "/";

  if (language === "en") {
    return cleanPath;
  }

  return `/zh${cleanPath}`;
}

/**
 * Find another language version of the same project.
 *
 * Projects are connected through translationKey.
 */
export function findTranslation(
  entries: CollectionEntry<"entries">[],
  project: CollectionEntry<"entries">,
  language: Language
) {
  return entries.find(
    (entry) =>
      entry.data.translationKey ===
        project.data.translationKey &&
      entry.data.lang === language
  );
}