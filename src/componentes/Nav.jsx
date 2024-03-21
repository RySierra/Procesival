

function Nav() {

  const CheckScroll = () => {
    window.addEventListener('scroll', (e)=>{
      console.log(window.scrollV);

      
    })
  
  }
  
  CheckScroll()
  return (
    <section>
      <p className="bg-red-500 h-32 text-zinc-900">Este es mi Navegador</p>
    </section>
  );
}

export default Nav;