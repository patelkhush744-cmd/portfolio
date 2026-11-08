import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { tags, contact } from "../data.js";
export default function Hero({ ready }) {
  const root = useRef();
  useLayoutEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      gsap.timeline({defaults:{ease:"expo.out"}})
        .from(q(".big"),{yPercent:25,autoAlpha:0,duration:1.6})
        .from(q(".photo"),{yPercent:18,autoAlpha:0,duration:1.2},0.2)
        .from(q(".hi"),{autoAlpha:0,y:20},0.5)
        .from(q(".ln b"),{yPercent:115,duration:1,stagger:0.12},0.6)
        .from(q(".sub, .cta > *"),{autoAlpha:0,y:30,stagger:0.1},1)
        .from(q(".ftag"),{scale:0,autoAlpha:0,ease:"back.out(2)",stagger:0.12},1.2);
      gsap.to(q(".ftag"),{y:"random(-14,14)",x:"random(-8,8)",duration:"random(2,3.5)",ease:"sine.inOut",repeat:-1,yoyo:true});
      gsap.to(q(".glow"),{x:80,y:-50,duration:9,ease:"sine.inOut",repeat:-1,yoyo:true});
      gsap.to(q(".big"),{yPercent:30,ease:"none",scrollTrigger:{trigger:root.current,start:"top top",end:"bottom top",scrub:true}});
    },root);
    return () => ctx.revert();
  },[ready]);
  return <header className="hero" id="top" ref={root}>
    <div className="glow" /><div className="big d" aria-hidden="true">Portfolio</div>
    <div className="photo"><svg viewBox="0 0 300 400" aria-hidden="true"><circle cx="150" cy="150" r="62" fill="#2a2a2a"/><path d="M30 400c0-92 52-140 120-140s120 48 120 140z" fill="#2a2a2a"/></svg></div>
    {tags.map(([t,c],i)=><span key={t} className={"ftag h"+i} style={{background:c}}>{t}</span>)}
    <div className="intro"><p className="hi">Hello, I’m</p>
      <h1 className="d name"><span className="ln"><b>Khush</b></span><span className="ln"><b>Patel<em>.</em></b></span></h1>
      <p className="sub">BCA student into Java, Python, web development and cyber security. Working towards becoming a Software Engineer and Security Engineer.</p>
      <div className="cta"><a className="btn" href="#work">See my work</a><a className="btn ghost" href={"mailto:"+contact.email+"?subject=Resume%20Request"}>Request resume</a></div>
    </div>
  </header>;
}
