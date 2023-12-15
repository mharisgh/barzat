import Image from "next/image"

interface iAppProps {
  images: any
}

export default function ImageGallery({ images }: iAppProps) {
  console.log('tes5gg5t', images);
  return (
    <div>
      <div>
        {/* {images.map((image: any, idx: any) => (
          <div key={idx}>
            <Image
              src={image.imageUrl}
              width={100}
              height={100}
              alt="photo"
            />
          </div>
        ))} */}
      </div>
    </div>
  )
}