import React from "react"
import { Link } from "gatsby"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div class="">
      <Header />
      {children}
    </div>
  )
}
