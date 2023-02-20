import { useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil"
import classNames from "classnames/bind"
import CloseIcon from "@mui/icons-material/Close"
import { mobileIsMenuOpenState } from "components/layout"
import { useNav } from "../routes"
import styles from "./Nav.module.scss"
///import { useThemeFavicon } from "data/settings/Theme"
import { isWalletBarOpen } from "pages/wallet/Wallet"
import ToxicIcon from "styles/images/menu/ToxicLabsLogo.svg"

const cx = classNames.bind(styles)

const Nav = () => {
  useCloseMenuOnNavigate()
  const { menu } = useNav()
  //const icon = useThemeFavicon()
  const [isOpen, setIsOpen] = useRecoilState(mobileIsMenuOpenState)
  const close = () => setIsOpen(false)

  return (
    <nav>
      <header className={styles.header}>
        <div className={classNames(styles.item, styles.logo)}>
          <img src={ToxicIcon} alt="Station" />{" "}
          <strong className={styles.title}>Toxic Station</strong>
        </div>
        {isOpen && (
          <button className={styles.toggle} onClick={close}>
            <CloseIcon />
          </button>
        )}
      </header>

      {menu.map(({ path, title, icon }) => (
        <NavLink
          to={path}
          className={({ isActive }) =>
            cx(styles.item, styles.link, { active: isActive })
          }
          key={path}
        >
          {icon}
          {title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav

/* hooks */
const useCloseMenuOnNavigate = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useRecoilState(mobileIsMenuOpenState)
  const setIsWalletOpen = useSetRecoilState(isWalletBarOpen)

  useEffect(() => {
    if (isOpen) {
      // close wallet menu on mobile
      setIsWalletOpen(true)
    }
    setIsOpen(false)
  }, [pathname, setIsOpen, setIsWalletOpen]) // eslint-disable-line react-hooks/exhaustive-deps
}
