

export default function ToggleMode({handleMode}) {
  

  return (
    <input
     onChange={handleMode}
      type="checkbox"
      defaultChecked
      className="relative
    scale-75
    sm:scale-100 md:scale-75
    appearance-none
    h-[30px] 
    w-[60px]
    flex
    items-center
    cursor-pointer 
    rounded-full
     bg-[#223344]
     transition-all 
     shadow-md
     before:content-sunLight
     before:absolute
     before:top-[3px]
     before:right-[3px]
     after:content-moonDark
     after:absolute
     after:top-[3px]
     after:left-[4px]
     after:h-6
     after:w-6
     after:rounded-full
     after:bg-white
     after:shadow-sm
     after:transition-all
     checked:after:content-sunDark
     checked:after:translate-x-7
     checked:bg-[#223344]
     checked:before:content-moonLight
     checked:before:absolute
     before:checked:top-[3px]
     before:checked:left-[0px]
     "
    />
  );
}
