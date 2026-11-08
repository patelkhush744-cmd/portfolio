import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
export default function Heading({children,tag:T="h2"}) {
  const ref=useRef();
  useLayoutEffect(()=>{
    const a=gsap.from(ref.current.firstChild,{yPercent:110,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:ref.current,start:"top 88%"}});
    return ()=>{a.scrollTrigger?.kill();a.kill();};
  },[]);
  return <T className="d h" ref={ref}><span className="mask">{children}</span></T>;
}
