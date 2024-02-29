type TStats = {
  stats: string;
  label: string;
}

// list of statistics
const stats: TStats[] = [
  {
    stats: "100K",
    label: "Partners Onboarded",
  },
  {
    stats: "18K+",
    label: "Pincodes Covered",
  },
  {
    stats: "1.5Mn+",
    label: "Advisor Community",
  }
]


export default function StatsSection() {
  return (
    <section className="py-20 text-center space-y-16">
      <p className="uppercase text-zinc-500">
        seize the oppurtunity; unlock growth
      </p>


      <div className="flex items-center justify-center gap-20">
        {stats.map(stat => (
          <div
            key={stat.label}
            className=""
          >
            <h1 className="text-purple-500 text-4xl font-bold">
              {stat.stats}
            </h1>

            <p className="font-thin">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
