import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <a class="font-mono mr-4 p-1" to={props.to}>
    <Link to={props.to}>{props.children}</Link>
  </a>
)
export default function Header(props) {
  return (
    <div class="flex p-3">
      <ListLink to="/" class="ml-4">
        Nigel Penilla
      </ListLink>
      <ul class="flex ml-auto">
        <li>
          <ListLink to="/">Home</ListLink>
        </li>
        <li>
          <ListLink to="/resume">Resume</ListLink>
        </li>
        <li>
          <ListLink to="/projects">Projects</ListLink>
        </li>
        <li>
          <ListLink to="/about">About</ListLink>
        </li>
      </ul>
    </div>
  )
}
