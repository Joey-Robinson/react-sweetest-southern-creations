import React from "react"
import Header from "./header"
import "../styles/main.scss"
import Menu from "./menu"

const Layout = ({ children }) => (
  <>
    <main className="primary">
      <Header />
      <Menu className="?" />
      {children}
    </main>
  </>
)

export default Layout
