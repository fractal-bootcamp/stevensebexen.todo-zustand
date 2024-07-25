import useAppViewStore from "../../stores/AppViewStore";
import { AppView } from "../../types";
import styles from './style.module.sass';

export type NavBarItemProps = {
  appView: AppView;
  displayName: string;
};

export default function NavBarItem(props: NavBarItemProps) {
  const {appView, setAppView} = useAppViewStore();

  function onClick() {
    setAppView(props.appView);
  }

  const className = [
    styles.navBarItem,
    appView === props.appView && styles.active
  ].filter(x => Boolean(x)).join(' ');

  const divProps = {className, onClick};

  return (
    <div {...divProps}>
      {props.displayName}
    </div>
  )
}