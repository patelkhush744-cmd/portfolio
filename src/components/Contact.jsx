import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { tags, contact } from "../data.js";
import Heading from "./Heading.jsx";
export default function Contact() {
  const root=useRef(),btn=useRef();
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.from(".ct > *:not(h2)",{y:40,autoAlpha:0,stagger:0.12,duration:1,ease:"expo.out",scrollTrigger:{trigger:".ct",start:"top 75%"}});
      gsap.to(".cft",{y:"random(-16,16)",x:"random(-10,10)",duration:"random(2,4)",ease:"sine.inOut",repeat:-1,yoyo:true});
    },root);
    const el=btn.current;
    if(!matchMedia("(hover:hover)").matches)return ()=>ctx.revert();
    const x=gsap.quickTo(el,"x",{duration:0.5,ease:"power3"}),y=gsap.quickTo(el,"y",{duration:0.5,ease:"power3"});
    const move=e=>{const r=el.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*0.35);y((e.clientY-r.top-r.height/2)*0.35);};
    const leave=()=>{x(0);y(0);};
    el.addEventListener("mousemove",move);el.addEventListener("mouseleave",leave);
    return ()=>{el.removeEventListener("mousemove",move);el.removeEventListener("mouseleave",leave);ctx.revert();};
  },[]);
  return <section className="sec contact" id="contact" ref={root}>
    {tags.map(([t,c],i)=><span key={t} className={"cft c"+i} style={{background:c}}>{t}</span>)}
    <div className="ct"><Heading>Let’s work <span className="o">together.</span></Heading>
      <a className="mail d" href={"mailto:"+contact.email}>{contact.email}</a>
      <div className="soc"><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={"mailto:"+contact.email+"?subject=Resume%20Request"}>Resume</a></div>
      <a className="orb" ref={btn} href={"mailto:"+contact.email} data-cursor>Say<br/>hello</a>
    </div>
    <footer><span>© 2026 Khush Patel</span><span>BCA student · Java · Python · Cyber Security</span></footer>
  </section>;
}
