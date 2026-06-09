import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Purity Of Heart",
    short_name: "Purity",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f3",
    theme_color: "#241f1b",
    icons: [
      {
        src: "/purity-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
