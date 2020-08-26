import React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <React.Fragment>
    <div className="timeline">
    <div class="timeline-container">
    <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>{"{()career.next}$"}</h3>
         <span></span>
         <p>What we know is a drop. What we don't know is an ocean.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3><a href="https://www.elastic.co">Elastic</a></h3>
         <span>2016-current</span>
         <p>Tech lead on Kibana. Data analytics, search, visualizations, pluggable infrastructure. Exponential growth. 
           Javascript, Typescript, React, Angular, Node.js, Github</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Informz</h3>
         <span>2015-2016</span>
         <p>Small, local marketing company. First job as a mom. ASP.net, Javascript, React, Typescript. 
           Thought I wanted a small pond. Ended up looking for a bigger one.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>Google</h3>
         <span>2008-2015</span>
         <p>Adwords Editor. C++, Javascript, Qt. One of the few rare desktop applications at Google.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>LAANCOR</h3>
         <span>2007-2008</span>
         <p>First start up. First post college job. Three engineers, two owners. Java, text analytics. 
            Went the way of many start ups.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>National Security Agency</h3>
         <span>2006-2007</span>
         <p>If I told you, I'd have to kill you.</p>
      </div>
   </div>

   <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>SUNY Albany</h3>
         <span>2004-2006</span>
         <p>BS & MS in Computer Science and Applied Mathematics. Valedictorian. Came back for a commencement speech around 2012.</p>
      </div>
   </div>
   <div class="timeline-block timeline-block-right">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>SUNY Oneonta</h3>
         <span>2002-2004</span>
         <p>Started in Fashion Design! Ended in CS.</p>
      </div>
   </div>
</div></div>
  </React.Fragment>
  );
}


export default Timeline