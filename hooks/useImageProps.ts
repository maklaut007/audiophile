import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

interface ImageProps {
  src: string;
  width: string;
  height: string;
}

interface ImageSet {
  mobile: ImageProps;
  tablet: ImageProps;
  desktop: ImageProps;
}

export default function useImageProps(props: ImageSet) {
  const width: Number = useWindowWidth();

  const [currentProps, setCurrentProps] = useState<ImageProps>({
    src: "/assets/home/mobile/image-speaker-zx7.jpg",
    width: "0",
    height: "0",
  });

  useEffect(() => {
    if (width < 768) {
      setCurrentProps(props.mobile);
    }
    if (width > 768 && width < 1440) {
      setCurrentProps(props.tablet);
    }
    if (width > 1440) {
      setCurrentProps(props.desktop);
    }
  }, [width]);

  return currentProps;
}
