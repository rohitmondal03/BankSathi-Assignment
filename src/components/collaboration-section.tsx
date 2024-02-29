export default function CollaborationSection() {
  return (
    <section className="py-10 text-center space-y-16">
      <h1 className="text-3xl">
        Open collaboration?
      </h1>


      <div className="flex items-center justify-between bg-white rounded-full shadow-[0_0_20px] shadow-zinc-300 mx-28 px-10 py-3">
        <div className="flex items-center gap-2">
          <p className="bg-primary py-3 px-6 text-2xl text-white rounded-full w-fit">1</p>
          <p className="text-2xl">Get in touch</p>
        </div>

        <Separator />

        <div className="flex items-center gap-2">
          <p className="bg-primary py-3 px-6 text-2xl text-white rounded-full w-fit">2</p>
          <p className="text-2xl">Discuss</p>
        </div>

        <Separator />

        <div className="flex items-center gap-2">
          <p className="bg-primary py-3 px-6 text-2xl text-white rounded-full w-fit">3</p>
          <p className="text-2xl">It&apos;s live</p>
        </div>
      </div>
    </section>
  )
}


// for the dotted separators between the steps...
function Separator() {
  return <div className="w-[25%] border-dotted border-2 border-zinc-400" />
}