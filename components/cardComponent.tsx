import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";

export default function CardComponent({ data }: any) {
  const getImageUtil = (url: string) => {
    if (!url) return;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 2];

    return id;
  };
  const height = 100;
  const width = 180;

  return (
    <section className="my-10">
      <div className="grid grid-cols-5 gap-5">
        {data &&
          data.results.map((item: any, index: number) => (
            <Card
              key={index}
              isFooterBlurred
              className="border-none"
              radius="lg"
            >
              <div className="w-full h-60 flex items-start justify-center">
                {/* <figure className="relative w-full block h-[70%] p-5"> */}
                {/* <Suspense fallback={<p>Loading...</p>}> */}
                <Image
                  alt={item.name}
                  // blurDataURL={
                  //   "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAC0ALQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
                  // }
                  // blurDataURL={`/_next/image?url=${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getImageUtil(item.url)}.svg`}&w=16&q=1`}
                  className="object-contain h-[70%] p-5"
                  height={height}
                  // priority={index < 5 ? true : false}
                  // placeholder="blur"
                  quality={100}
                  // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getImageUtil(item.url)}.gif`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getImageUtil(item.url)}.svg`}
                  // src={blura}
                  width={width}
                />
                {/* </Suspense> */}
                {/* </figure> */}
              </div>
              <CardFooter className="justify-between flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="break-all text-lg capitalize font-bold bg-gradient-to-r from-fuchsia-950 via-red-500 to-purple-900 inline-block text-transparent bg-clip-text">
                  {item.name}
                </p>
                <Button
                  className="text-tiny text-white bg-gradient-to-r from-purple-500 to-blue-500 outline-none"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Buy Sticker
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
}
