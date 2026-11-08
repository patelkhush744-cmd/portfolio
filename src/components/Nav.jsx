import { useEffect,useRef } from "react";
import { gsap } from "gsap";
export default function Nav({ready}) {
  const ref=useRef();
  useEffect(()=>{if(ready)gsap.fromTo(ref.current,{yPercent:-200},{yPercent:0,duration:0.9,ease:"expo.out",delay:0.3});},[ready]);
  return <nav className="nav" ref={ref} style={{transform:ready?undefined:"translateY(-200%)"}} aria-label="Main">
    <i className="logo"/>{["Home","Work","About","Contact"].map((t,i)=><a key={t} href={i?"#"+t.toLowerCase():"#top"}>{t}</a>)}
  </nav>;
}
