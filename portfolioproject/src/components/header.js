import React from 'react';


function Header(){

  return(
    <header>

        <div className="title fs-1"> 

            Adam Andrzejczak's Portfolio

        </div>

        <nav className="navbar">
             <ul className="navBarList">
                <li>
                    <a href="#">About Me</a>
                </li>
            
             
                <li>
                    <a href="#">Portfolio</a>
                </li>
            
                <li>
                    <a href="https://github.com/andadam24">Resume</a>
                </li>
                <li>
                    <a href="https://github.com/andadam24">Contact</a>
                </li>
            </ul>
        </nav>

    </header>
  );
}

export default Header;