import React from 'react'
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
      <nav className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
              <Link to='/dashboard' className="btn btn-ghost text-xl">TaskTrack</Link>
              <Link to='/dashboard' className="btn btn-link text-sm no-underline">Dashboard</Link>
              <Link to='/board' className="btn btn-link text-sm no-underline">Board</Link>
          </div>
      </nav>
  )
}

export default Navbar 