import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ImageSet {
  images: ImageProps[];
}

export default function useImageProps(props: ImageSet) {
  const width: Number = useWindowWidth();

  const [currentProps, setCurrentProps] = useState<ImageProps>({
    src: "./",
    width: 0,
    height: 0,
    alt: "Pic",
  });

  useEffect(() => {
    if (width < 768) {
      setCurrentProps(props.images[0]);
    }
    if (width > 768 && width < 1440) {
      setCurrentProps(props.images[1]);
    }
    if (width > 1440) {
      setCurrentProps(props.images[2]);
    }
  }, [width, props.images]);

  return currentProps;
}
