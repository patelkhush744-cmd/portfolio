import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { stats } from "../data.js";
export default function Loader({onDone}) {
  const root=useRef();
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
      const q=gsap.utils.selector(root),tl=gsap.timeline({onComplete:onDone});
      tl.fromTo(q(".slash"),{xPercent:-300},{xPercent:700,duration:1.1,ease:"power3.inOut",stagger:0.12})
        .from(q(".tag"),{x:-40,autoAlpha:0,duration:0.5},0.5)
        .from(q(".nm b"),{yPercent:115,duration:0.9,ease:"expo.out",stagger:0.15},0.9)
        .from(q(".role"),{autoAlpha:0,y:12},1.9).from(q(".st"),{y:30,autoAlpha:0,stagger:0.12},2.1);
      q("[data-to]").forEach(el=>{const o={v:0};tl.to(o,{v:+el.dataset.to,duration:1.2,ease:"power3.out",onUpdate:()=>el.textContent=Math.round(o.v)+el.dataset.s},2.2);});
      tl.to(root.current,{yPercent:-100,duration:1,ease:"power4.inOut"},"+=0.35");
      root.current.querySelector(".skip").onclick=()=>tl.progress(1);
    },root);
    return ()=>ctx.revert();
  },[]);
  return <div className="loader" ref={root}><i className="slash s1"/><i className="slash s2"/>
    <div className="ld-card"><span className="tag">Player profile</span>
      <h2 className="d nm"><span><b>Khush</b></span><span><b className="o">Patel</b></span></h2>
      <p className="role">BCA Student · Java Developer · Cyber Security</p>
      <div className="sts">{stats.map(([n,s,l])=><div className="st" key={l}><strong data-to={n} data-s={s}>0{s}</strong><span>{l}</span></div>)}
        <div className="st"><strong>Java</strong><span>Best skill</span></div>
      </div>
    </div><button className="skip" type="button" data-cursor>Skip intro</button>
  </div>;
}
