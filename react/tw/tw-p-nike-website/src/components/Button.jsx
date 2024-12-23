const Button = ({ label, className }) => {
  return (
    <div
      className={`${className} w-fit flex text-center  ease-in-out cursor-pointer transition duration-1000 hover:shadow-inner hover:shadow-gray-400 px-4 py-2 border-[#FF6452] border-2 shadow-xl rounded-sm font-mono text-xl`}
    >
      {label}
    </div>
  )
}
export default Button
