

const PillButton = ({href = "#",
children}) => {
    
  return (
    <a href={href}
className={"px-5 py-2.5 rounded-full text-sm font-medium bg-[#FFC900] text-black hover:bg-gray-200 transition-colors active:scale-95 hover:-translate-y-1"}>
    {children}
    </a>
  )
}

export default PillButton

