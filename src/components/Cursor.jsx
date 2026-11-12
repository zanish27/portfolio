const Cursor = (props) => {
  const trail = [
    'h-3 w-3 opacity-70 duration-200',
    'h-3 w-3 opacity-50 duration-300',
    'h-2 w-2 opacity-30 duration-500',
    'h-2 w-2 opacity-20 duration-700',
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {trail.map((cls, i) => (
        <span
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC900] transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] ${cls}`}
          style={{ left: props.pos.x, top: props.pos.y }}
        />
      ))}

      <span
        className={`absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC900] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${props.down ? 'scale-50' : 'scale-100'}`}
        style={{ left: props.pos.x, top: props.pos.y }}
      />
    </div>
  )
}

export default Cursor