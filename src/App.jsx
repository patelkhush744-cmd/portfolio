import { useState, useEffect } from "react";
import Loader from "./components/Loader.jsx";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("lock", !ready); }, [ready]);
  return (<><Cursor />{!ready && <Loader onDone={() => setReady(true)} />}<Nav ready={ready} /><main><Hero ready={ready} /><Work /><About /><Contact /></main></>);
}
