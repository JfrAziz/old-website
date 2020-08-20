import React, {useState, useEffect} from 'react'
import Logo from '../icons/Logo'

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [ visible, setVisible ] = useState(true)

  const handleHeader = () => {
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollPos > currentScrollPos
    setVisible(visible)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleHeader)
    return () => {
      window.removeEventListener("scroll", handleHeader)
    }
  }, [visible, prevScrollPos])

  return (
    <header className={[visible ? "header-visible" : "", pageYOffset ? "header-not-top" : ""].join(' ')}>
      <nav>
        <div id="logo">
          <Logo/>
        </div>
        <ul>
          <li>
            <a href="#biodata">About Me</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#article">Article</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header