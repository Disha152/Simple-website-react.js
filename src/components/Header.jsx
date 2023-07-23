import React from 'react';
import {HashLink} from "react-router-hash-link";


export default function Header() {
  return (
    <nav>
      <h1>Devcode</h1>
      <main>
        <HashLink to = {"/#home"}>Home</HashLink>
        <HashLink to = {"/#about"}>About</HashLink>
        <HashLink to = {"/#brands"}>Brands</HashLink>
        <HashLink to = {"/#services"}>Services</HashLink>
      

      </main>
    </nav>
  )
}
