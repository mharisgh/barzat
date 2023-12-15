import ImageGallery from "@/app/components/ImageGallery"
import { fullDestination } from "@/app/interface"
import { client } from "@/app/lib/sanity"
import Image from "next/image"

async function getData (slug : string) {
  const query = `*[_type == "destination" && slug.current == "${slug}"][0]
  {
    _id,
      "imageUrl" : destinationImg.asset->url,
      "slug": slug.current,
      "destinationName": name,
  }`

  const data = await client.fetch(query)
  return data
}

export const dynamic = "force-dynamic";


export default async function DestinationPage({params}:{params:{slug:string}}) {
  const data: fullDestination = await getData(params.slug)
  return (
    <div>
      <div>
        <ImageGallery images={data.imageUrl}/>
        <Image
            src={data.imageUrl}
            width={100}
            height={100}
            alt="photo"
          />
      </div>
    </div>
  )
}