const images = import.meta.glob(
  "/src/content/entries/**/*.{png,jpg,jpeg,webp}",
  {
    eager:true,
    import:"default",
  }
);


export function getProjectImage(
    id:string,
    filename:string
){

    // Fashion-design PNGs served raw from /public to preserve alpha transparency
    if (id === "fashion-design" && filename.endsWith(".png")) {
      return `/art/fashion-design/${filename}`;
    }

    const key = Object.keys(images).find(
        (path)=>
            path.includes(`/entries/${id}/`)
            &&
            path.endsWith(filename)
    );


    if(!key){
        console.warn(
            "Image not found:",
            id,
            filename
        );

        return null;
    }


    return images[key] as string;

}


/**
 * Same as getProjectImage but always returns the final URL string.
 * (Astro image globs actually yield ImageMetadata objects at runtime —
 *  their .src property holds the URL. getProjectImage's "as string" cast
 *  hides this, so consumers that render plain <img> must normalize.)
 * Used by ProjectCard / ProjectDetail. ArtGallery (frozen) and the detail
 * page templates keep consuming getProjectImage's raw output.
 */
export function getProjectImageUrl(
    id:string,
    filename:string
): string | null {

    const raw = getProjectImage(id, filename) as
        | string
        | { src: unknown }
        | null;

    if(!raw){
        return null;
    }

    return typeof raw === "string" ? raw : String(raw.src);

}