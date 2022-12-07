import { useEffect, useState } from 'react';

function useGetImgDimensions(imageURL: string | undefined): [number, number] {
  const [ImgHeight, setHeight] = useState<number>(0);
  const [ImgWidth, setWidth] = useState<number>(0);

  useEffect(() => {
    const img = new Image();
    if (imageURL) {
      img.src = imageURL;
      img.addEventListener('load', function () {
        // debug
        // console.log("useGetImgDimensions: ", this.naturalHeight, this.height);
        setHeight(this.naturalHeight);
        setWidth(this.naturalWidth);
      });
    }
  }, []);

  return [ImgWidth, ImgHeight];
}

export default useGetImgDimensions;
