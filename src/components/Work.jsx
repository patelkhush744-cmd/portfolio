import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { projects } from "../data.js";
import Heading from "./Heading.jsx";
function Card({p}) { return <a className="card" href={p.l} target="_blank" rel="noopener noreferrer" data-cursor>
  <span className="float" style={{background:p.c}}>{p.s[0]}</span><b className="num d">{p.n}</b>
  <h3 className="d">{p.t}</h3><p>{p.d}</p><div className="chips">{p.s.map(s=><em key={s}>{s}</em>)}</div>
</a>; }
export default function Work() {
  const root=useRef();
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.from(".card",{y:90,rotate:3,autoAlpha:0,duration:1,ease:"expo.out",stagger:0.15,scrollTrigger:{trigger:".grid",start:"top 80%"}});
      gsap.to(".float",{y:"random(-10,10)",rotate:"random(-6,6)",duration:"random(2,3)",ease:"sine.inOut",repeat:-1,yoyo:true});
    },root);
    return ()=>ctx.revert();
  },[]);
  return <section className="sec" id="work" ref={root}><Heading>Work that <span className="o">ships.</span></Heading>
    <div className="grid">{projects.map(p=><Card key={p.n} p={p}/>)}</div>
  </section>;
}
