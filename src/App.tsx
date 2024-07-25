import './App.css'
import NavBar from './components/NavBar/NavBar'
import useAppViewStore from './stores/AppViewStore'
import views from './views/views';

function App() {
  const {appView} = useAppViewStore();
  const ViewComponent = views[appView];
  return (
    <>
      <NavBar />
      <ViewComponent />
    </>
  )
}

export default App
