import React from "react"
import { fallDown as Slider } from "react-burger-menu"
import { Link } from "gatsby"

const Menu = () => (
  <Slider>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/creations/">Creations</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </Slider>
)

export default Menu
