import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { stats,timeline,skills } from "../data.js";
import Heading from "./Heading.jsx";
export default function About() {
  const root=useRef();
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
      root.current.querySelectorAll("[data-to]").forEach(el=>{const o={v:0};gsap.to(o,{v:+el.dataset.to,duration:1.6,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",once:true},onUpdate:()=>el.textContent=Math.round(o.v)+el.dataset.s});});
      gsap.from(".line",{scaleY:0,transformOrigin:"top",ease:"none",scrollTrigger:{trigger:".tl",start:"top 75%",end:"bottom 75%",scrub:true}});
      gsap.from(".tl-i",{x:50,autoAlpha:0,duration:0.9,ease:"expo.out",stagger:0.2,scrollTrigger:{trigger:".tl",start:"top 80%"}});
      gsap.from(".skills span",{y:20,autoAlpha:0,stagger:0.06,scrollTrigger:{trigger:".skills",start:"top 90%"}});
    },root);
    return ()=>ctx.revert();
  },[]);
  return <section className="sec" id="about" ref={root}><Heading>Not just code.<br/><span className="o">Code that ships.</span></Heading>
    <div className="stats">{stats.map(([n,s,l])=><div key={l}><strong className="d" data-to={n} data-s={s}>0{s}</strong><span>{l}</span></div>)}</div>
    <div className="two"><div>
      <p>I’m Khush Patel, a BCA student learning Java development, Python, web development and cyber security. I enjoy building websites and solving programming problems.</p>
      <p>My goal is to become a professional Software Engineer and Security Engineer.</p>
      <div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div>
    </div><div className="tl"><i className="line"/>{timeline.map(([t,s])=><div className="tl-i" key={t}><strong>{t}</strong><span>{s}</span></div>)}</div></div>
  </section>;
}
