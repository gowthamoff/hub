const CountCard = ({ statistics }) => {
  return (
    <div className="flex w-full justify-evenly">
      {statistics.map((stat) => (
        <div className="shadow-xl px-4 py-2 rounded-xl">
          <div className="text-xl font-mono">{stat?.label}</div>
          <div className="text-3xl font-palanquin font-semibold">
            {stat?.value}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountCard
