const Footer = () => {
  return (
    <footer>
      <div className='bg-zinc-300 h-[300px] text-zinc-0'>
        This is my footer
        <div className="flex absolute right-[25px] bg-zinc-200 h-[250px] w-[250px]">
          <img src="./minimap.png" alt="your map here" />
        </div>
      </div>
    </footer>
  )
}

export default Footer