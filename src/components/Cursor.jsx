import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function Cursor() {
  const dot=useRef(),ring=useRef();
  useEffect(()=>{
    if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;
    const dx=gsap.quickTo(dot.current,"x",{duration:0.1}),dy=gsap.quickTo(dot.current,"y",{duration:0.1});
    const rx=gsap.quickTo(ring.current,"x",{duration:0.45,ease:"power3"}),ry=gsap.quickTo(ring.current,"y",{duration:0.45,ease:"power3"});
    const move=e=>{dx(e.clientX);dy(e.clientY);rx(e.clientX);ry(e.clientY);};
    const over=e=>ring.current.classList.toggle("big",!!e.target.closest("a,button,[data-cursor]"));
    addEventListener("mousemove",move);addEventListener("mouseover",over);document.documentElement.classList.add("has-cursor");
    return ()=>{removeEventListener("mousemove",move);removeEventListener("mouseover",over);document.documentElement.classList.remove("has-cursor");};
  },[]);
  return <><div className="cur-ring" ref={ring}/><div className="cur-dot" ref={dot}/></>;
}
