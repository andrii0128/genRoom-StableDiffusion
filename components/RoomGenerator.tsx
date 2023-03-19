import Image from "next/image";

export function RoomGeneration({
  original,
  generated,
}: {
  original: string;
  generated: string;
}) {
  return (
    <div className="flex flex-col space-y-10 mt-4 mb-4 border p-8 border-gray-600 rounded-xl">
      <div className="flex sm:space-x-8 sm:flex-row flex-col">
        <div>
          <h3 className="mb-1 font-medium text-lg">Original</h3>
          <Image
            alt="Original room"
            src={original}
            className="w-full object-cover h-80 rounded-2xl"
            width={300}
            height={300}
          />
        </div>
        <div className="sm:mt-0 mt-8">
          <h3 className="mb-1 font-medium text-lg">Generated</h3>
          <Image
            alt="Generated room"
            width={300}
            height={300}
            src={generated}
            className="w-full object-cover h-80 rounded-2xl sm:mt-0 mt-2"
          />
        </div>
      </div>
    </div>
  );
}
