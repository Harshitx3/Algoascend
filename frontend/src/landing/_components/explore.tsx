export default function Explore() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col">
          <h2 className="text-4xl">
            Explore the Learning Tracks
          </h2>
          <p className="text-xl mt-4">
            Browse curated learning paths designed to guide you from beginner to expert, one step at a time.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-20 p-8 gap-x-8 w-full">
          <div className="bg-amber-300 p-5 w-full h-100 flex text-center justify-center items-center rounded-2xl">
            <h2 className="text-2xl font-semibold text-black mb-2">
              Software Enginear
            </h2>
          </div>
          <div className="bg-amber-300 p-5 w-full h-100 flex text-center justify-center items-center rounded-2xl">
            <h2 className="text-2xl font-semibold text-black mb-2">
              Data Science
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}