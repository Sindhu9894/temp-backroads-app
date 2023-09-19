import logo from './images/logo.svg'
import { pagelinks, socialinks } from './data'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pagelinks.map((p) => {
            return (
              <li>
                <a href={p.href} className="nav-link">
                  {p.Text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialinks.map((p) => {
            return (
              <li>
                <a
                  href={p.href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={p.class}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
