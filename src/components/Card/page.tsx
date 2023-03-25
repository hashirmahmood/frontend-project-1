import Image from "next/image";

function Card({ message, imgUrl, name }: any) {
  return (
    <div className="p-12 max-w-[300px] flex flex-col gap-9 rounded-md min-h-[360px] hover:bg-gray-700/70 justify-between">
      <Image src="/quotes.svg" alt="quotes" width={30} height={70} />
      <p className="text-white">{message}</p>
      {/* Profile section */}
      <div className="flex items-start gap-4">
        {/* Left image */}
        <Image src={imgUrl} alt="" width={45} height={90} />
        {/* Name */}
        <div>
          <p className="text-white">{name}</p>
          <p className="text-dimWhite">Founder & Leader</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
