'client'

// import ImageGallery from "@/app/components/ImageGallery"
import { fullDestination, packageList } from "@/app/interface"
import { client } from "@/app/lib/sanity"
import Image from "next/image"

async function getData(slug: string) {
  const query = `*[_type == "destination" && slug.current == "${slug}"][0]
  {
    _id,
      "imageUrl" : destinationImg.asset->url,
      "slug": slug.current,
      "destinationName": name,
      description
  }`
  const data = await client.fetch(query)
  return data

}

async function getPkgData() {
  const query = `*[_type == "holidaypackage"] | order(_createdAt desc)
  {
    _id,
    "slug": slug.current,
    "destinationRef": destination._ref,
    "imageUrl" : images.asset->url,
    days,
      "packageName": name,
      flights,
      hotels,
      transfers,
      activities,
      location
}`
  const data = await client.fetch(query)
  return data;
}

export const dynamic = "force-dynamic";


export default async function DestinationPage({ params }: { params: { slug: string } }) {

  const data: fullDestination = await getData(params.slug)
  const pkgData: packageList = await getPkgData();

  // const people = [
  //   {
  //     name: 'James',
  //     age: 31,
  //   },
  //   {
  //     name: 'John',
  //     age: 45,
  //   },
  //   {
  //     name: 'Paul',
  //     age: 60,
  //   },
  //   {
  //     name: 'Ringo',
  //     age: 49,
  //   },
  //   {
  //     name: 'George',
  //     age: 60,
  //   },
  // ];

  // console.log("this is test", people.filter(person => person.age == 60).map(filteredPerson => filteredPerson.name))


  return (
    <div>
      {/* header image & title */}
      <div className="w-full h-[300px] relative flex items-center ">
        {/* <ImageGallery images={data.imageUrl}/> */}
        <img
          src={data.imageUrl}
          width={100}
          height={100}
          alt="photo"
          className="w-full h-full object-cover"
        />
        <div className=" w-full absolute text-white ">
          <div className="max-w-7xl mt-14 mx-auto">
            <p className="text-5xl font-semibold">{data.destinationName}</p>
            <p className="mt-2 ">{data.description}</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className="max-w-7xl mx-auto py-10 w-full">
          <h1 className='text-4xl font-semibold'>Choose Destinations</h1>
          <p className='text-gray-800 mt-2'>Explore Diverse Destinations, Uncover Captivating Descriptions</p>
        </div>
      </div>



      <div className="max-w-7xl mx-auto w-full  ">
        <div className="grid grid-cols-3 gap-10">

          {pkgData.filter((pkg: any) => pkg.destinationRef == data._id).map((filteredPkg: any) => (
            <div className="max-w-[300px] bg-white border border-black/20 rounded-2xl p-2 h-[360px]">
              <div className=" h-[60%] overflow-hidden rounded-xl w-full relative ">
                <div className="bg-[#faee38] font-medium absolute bottom-4 right-4 text-sm px-2 py-1 rounded-md">
                  {filteredPkg.days}
                </div>
                <img className="h-full w-full object-cover" src={filteredPkg.imageUrl} alt="" />
              </div>

              <div className=" h-[40%] flex flex-col justify-around">

                <h3 className="text-lg font-medium tracking-tight">
                  {filteredPkg.packageName}
                </h3>

                <div className="flex justify-between">
                  <div className="flex flex-col items-center">
                    <Image width={20} height={20} src="/001-airplane.svg" alt="flight" />
                    <p className="text-sm">{`${filteredPkg.flights} Flights`}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image width={20} height={20} src="/hotel.svg" alt="flight" />
                    <p className="text-sm">{`${filteredPkg.hotels} Flights`}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image width={20} height={20} src="/003-hiker.svg" alt="flight" />
                    <p className="text-sm">{`${filteredPkg.activities} Flights`}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image width={20} height={20} src="/bus.svg" alt="flight" />
                    <p className="text-sm">{`${filteredPkg.transfers} Flights`}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <img className="fill-[#462590] w-[20px] h-[20px]" src="/pin.svg" alt="location" />
                    <p>{filteredPkg.location}</p>
                  </div>
                  <button className="px-4 py-2 bg-[#462590] text-white font-semibold rounded-xl">
                    View Details
                  </button>
                </div>

              </div>
            </div>

          ))}
        </div>

        <section className="h-[500px] w-full bg-gray-200 mt-20">
          <div className="flex flex-col justify-center items-center">
            contact form
          </div>
        </section>

        <section className="h-[300px] w-full bg-gray-400 mt-20">
          <div className="flex flex-col justify-center items-center">
            Footer
          </div>
        </section>


      </div>

    </div>
  )
}