import { AppView } from "../../types";
import NavBarItem, { NavBarItemProps } from "./NavBarItem";
import styles from './style.module.sass';

const navBarItems: NavBarItemProps[] = [
  { appView: AppView.HOME, displayName: 'Home' },
  { appView: AppView.VIEW, displayName: 'View' },
  { appView: AppView.EDIT, displayName: 'Edit' },
];

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      {navBarItems.map(navBarItem => <NavBarItem key={navBarItem.appView} {...navBarItem} />)}
    </div>
  )
}