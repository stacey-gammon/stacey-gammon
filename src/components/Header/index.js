import React from "react"
import logo from "./logo.png"
import { Link } from "gatsby"
import "./style.css"
import { AiOutlineGithub } from "react-icons/ai"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

class Header extends React.Component {
  render() {
    const { location } = this.props

    const blogLinkStyle = {
      paddingBottom: location.pathname === "/blog" ? `5px` : `0px`,
      boxShadow: location.pathname === "/blog" ? `0px 1px 0px 0px black` : `none`,
    }
    const workLinkStyle = {
      paddingBottom: location.pathname === "/work" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/work" ? `0px 1px 0px 0px black` : `none`,
    }
    const aboutLinkStyle = {
      paddingBottom: location.pathname === "/" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    }

    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="Stacey Gammon" className="logo-img" />
        </Link>

        <div className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <h1 className="li-h1" style={blogLinkStyle}>
                <Link className="li-link" to={`/blog`}>
                  Blog
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={workLinkStyle}>
                <Link className="li-link" to={`/work`}>
                  Work
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={aboutLinkStyle}>
                <Link className="li-link" to={`/`}>
                  About
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={{}}>
                |
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={{}}>
               <a className="socialContactLink" href="https://www.linkedin.com/in/staceygammon">
                <FaLinkedin />
              </a>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1" style={{}}>
                <a className="socialContactLink" href="https://github.com/Stacey-Gammon">
                  <AiOutlineGithub />
                </a>
              </h1>
            </li>
            <li
              style={{
                float: "left",
              }}
            >
              <h1 className="li-h1" style={{}}>
                <a className="socialContactLink" href="https://twitter.com/Stacey_Gammon">
                  <FaTwitter />
                </a>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
