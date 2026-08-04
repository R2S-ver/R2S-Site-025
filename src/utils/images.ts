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