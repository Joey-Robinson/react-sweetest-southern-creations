import React from "react"
import Header from "./header"
import "../styles/main.scss"
import Menu from "./menu"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="primary">
      <Menu />
      {children}
    </main>
  </>
)

export default Layout
