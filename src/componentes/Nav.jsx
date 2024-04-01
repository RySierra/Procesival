import { useState, useRef, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [activeTab, setActiveTab] = useState(null);              // See which tab is currently selected
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);   // Check if the dropdown menu is open
  const [isHovered, setIsHovered] = useState(false);             // check for hovering
  const [dropdownHeight, setDropdownHeight] = useState(0);       // calculate how tall the dropdown menu has to be
  const containerRef = useRef(null);                             // indicate which container to reference for the width of the dropdown menu

  useEffect(() => {
    const handleResize = () => {
      if (isDropdownOpen && containerRef.current) {                 // Only update the width if the dropdown is open
        const containerWidth = containerRef.current.offsetWidth;    // Calculate the reference container's width
        setIsDropdownOpenWidth(containerWidth);                     // Make dropdown menu the right width
      }
    };

    handleResize();                                                 // Check for resizing
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [isDropdownOpen]);

  const setIsDropdownOpenWidth = (width) => {                           // Set dropdown menu width
    setIsDropdownOpen(width);                                           // Add 20 for some extra padding
  };

  const toggleDropdown = () => {                                        // Update the dropdown flag to it's opposite
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (tab) => {                                     // When clicking on a tab, set that one as the active one
    setActiveTab(tab);
    setIsDropdownOpen(true);                                            // Open dropdown when tab is clicked
  };

  const dropdownItems = {                                               // labels for each tab and their content
    quienes: ['Origenes', 'Actualidad'],
    patrimonio: ['Historico', 'Contemporaneo'],
    activos: ['Rustico', 'Industrial', 'Urbano'],
    proyectos: ['Completados', 'En curso'],
  };

  useEffect(() => {                                                     // Calculate the height of the dropdown menu
    if (isDropdownOpen) {
      const numItems = dropdownItems[activeTab]?.length || 0;           // Number of items of the active tab 
      const itemHeight = 45;                                            // Height of the text
      const calculatedHeight = numItems * itemHeight;                   // Number of items * arbritary height = height  
      setDropdownHeight(calculatedHeight);                              // set the value
    } else {
      setDropdownHeight(0);                                             // set height as 0 when closed for the animation
    }
  }, [isDropdownOpen, activeTab, dropdownItems]);

  return (
    <nav // Container for entire header
      className="text-black w-full z-10 flex items-center justify-between bg-zinc-50 fixed top-0">

      <div> {/*Logo container */}
        <img
          src="./logo3.svg"
          alt="your logo here"
          style={{ height: '250px' }}
          className="logo absolute bottom-0 left-0 h-full w-auto -mb-40 -ml-14 z-10" />
      </div> {/* Logo container */}

      <div // Container Tabs and Menu icon
        className='flex'>

        <div // Container Tabs REFERENCE FOR WIDTH
          className="flex items-center relative pl-4 pt-1"
          ref={containerRef}> {/* Indicates which container to take the width value from*/}

          <ul // Tabs
            className="flex pr-4 items-center text-zinc-900" >

            <li // Quienes Somos
              className="font-semibold text-xl p-3 hover:bg-zinc-200 hover:rounded-lg duration-150 relative"
              onClick={() => handleTabClick('quienes')} // When clicked, set active tab and open dropdown menu
              onMouseEnter={() => handleTabClick('quienes')} // When hovering, set active tab and open dropdown menu, close when mouse leaves
              onMouseLeave={() => setIsDropdownOpen(false)}  >
              Quienes Somos
            </li> {/* Quienes somos tab */}

            <li // Patrimonio
              className="font-semibold text-xl p-3 hover:bg-zinc-200 hover:rounded-lg duration-150 relative"
              onClick={() => handleTabClick('patrimonio')}       // When clicked, set active tab and open dropdown menu
              onMouseEnter={() => handleTabClick('patrimonio')}  // When hovering, set active tab and open dropdown menu
              onMouseLeave={() => setIsDropdownOpen(false)}>     {/* Close dropdown menu when not hovering */}
              Nuestro Patrimonio
            </li> {/* patrimonio tab */}

            <li // Activos en Renta
              className="font-semibold text-xl p-3 hover:bg-zinc-200 hover:rounded-lg duration-150 relative"
              onClick={() => handleTabClick('activos')}         // When clicked, set active tab and open dropdown menu
              onMouseEnter={() => handleTabClick('activos')}    // When hovering, set active tab and open dropdown menu
              onMouseLeave={() => setIsDropdownOpen(false)}>    {/* Close dropdown menu when not hovering */}
              Activos en Renta
            </li> {/* Activos tab*/}

            <li // Proyectos
              className="font-semibold text-xl p-3 hover:bg-zinc-200 hover:rounded-lg duration-150 relative"
              onClick={() => handleTabClick('proyectos')}       // When clicked, set active tab and open dropdown menu
              onMouseEnter={() => handleTabClick('proyectos')}  // When hovering, set active tab and open dropdown menu
              onMouseLeave={() => setIsDropdownOpen(false)}  >  {/* Close dropdown menu when not hovering */}
              Proyectos
            </li> {/* proyectos tab */}

          </ul> {/* tabs container */}

          {isDropdownOpen ? ( // Dropdown menu animation if statement (only when open)
            <ul className="absolute top-full right-0 bg-zinc-200 rounded-b shadow-md z-5"
              style={{
                width: `${isDropdownOpen}px`,
                height: `${dropdownHeight}px`,
                transition: 'height 0.5s ease',  // grow in height
                overflow: 'hidden'               // prevent text from appearing without the box
              }}>                                {/* style for dropdown animation*/}

              <div>                                                 {/* Populate inside of dropdown menu*/}
                {dropdownItems[activeTab]?.map                      // Put the right dropdown items in their places if there's any
                  ((item, index) =>
                  (
                    <li  // list items into dropdown
                      key={index}
                      className="p-2 text-xl dropdown-menu" >
                      {item}
                    </li> // Close list of dropdown menu items
                  )
                  )

                } {/* Close if statement */}

              </div> {/* Close dropdown text container*/}

            </ul> // Close dropdown menu container

          ) : ( // Else statement (dropdown animation when menu is closed)
            <ul    // Menu container
              className="dropdown-menu pr-w"  // Change height and width to 0 (effectively hides the menu)
              style={{ width: '0px', height: '0px' }}>
            </ul> // Close menu container 

          )} {/* Close else statement */}

        </div>  {/* Close tabs container */}

        <div className={`hamburger-icon p-3 ${isHovered ? 'rotate-90' : ''}`}  // Menu icon rotating animation when hovering
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>

          {/* SVG hamburger menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10">
            {/*  Actual menu icon lines (rendered one by one):*/}
            <rect fill="black" width="20" height="2" rx="1" y="6" />
            <rect fill="black" width="20" height="2" rx="1" y="11" />
            <rect fill="black" width="20" height="2" rx="1" y="16" />
          </svg> {/*  Close menu icon render*/}

        </div> {/* Close menu icon container */}

      </div> {/* Close container and menu icon tabs */}

    </nav> // Close entire header 
 
 ); // Close return statement 

} // Close nav() function

export default Nav;




/*   -----------Skeleton----------

Imports

Nav (
  function declarations

return:
  whole header container

    logo
      logo render
    ^

    tabs and menu container

      tabs container (width)

        tabs content

          make tabs
            tab render
          ^
          populate tabs
            if hover, open dropdown
            else close dropdown  
          ^
        ^
      ^    
      Menu icon animation
        icon render
      ^
    ^
  ^
^
*/