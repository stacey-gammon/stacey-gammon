import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>About me</h2>
        
        <p>Hello, I'm Stacey. 👋</p>

        <p>
          Over the years, I've been involved in a lot of things. I'm somewhat of a serial hobbyist.
          There was that time I read Born to Run and spent the whole summer barefoot running. There was the time
          I started my first garden and brought an 3 inch thick encylopedia on garden plant varieties, as if I would
          ever actually read it. There were various seasons focused on tae-kwon-do, meditation, philosophy, and poker strategies. I
          once bought a book on out of body experiences and really tried to make it happen. It didn't work, but the book
          on Lucid dreaming <i>did</i>. That was cool. 
        </p><p>
          One of my more notable hobbys turned into a business adventure when I started my{' '}
          <a href="www.staceygammonpetphotography.com">pet photography business</a>. Since having two kids though,
          I decided the time investment wasn't worth it. It wasn't a passion, it was a dedicated interest, and while I keep
          the website up because I like to look at it every now and then, it's non-operational.
          My newest explorations are musical - trying to learn to sing, and play the mandolin. I'm even in a band called
          {' '}<a href="www.picknhops.com">Pick n' Hops</a>. I have a feeling music theory is going to hold my interests for
          awhile. These are skills that take a life time to acquire. I don't think I'll reach a plateau any time soon.
        </p>
        
        <p>
          The one interest that has remained a constant in my life has been software development. It started
          when I was just a young girl, looking over my father's shoulder as he worked from home, running the
          software business he started from the ground up. He gently developed that interest, never being too
          insistent, but always there to set me up with the basics and answer questions when I needed help. The
          first two programs I wrote were a maze game, where you'd lose if the "mouse" wandered over a section of wall (although
          some sections were secrete passage ways!), and a very ugly avatar builder using MS Paint colors and shapes.  
        </p>

        <p>
         Initially I went to college for Fashion Design. My father bit his tongue and bided his time, knowing it
         would never help to say what was really on his mind ("you're wasting your brain!"). Luckily, it worked, and
         lacking the obstinance a challenge would have stirred, I naturally changed inclinations and majors,
         eventually graduating with a masters in Computer Science and Mathematics as Valedictorian.
        </p>

        <p>
          My first job was working for the NSA in an internship. They accepted me after some extra screenings due to some
           not-exactly-strictly-lawful college activities (with today's laws, I would simply be considered an entrepreneur...). 
          I liked the work and was offered to stay on for a full time position but ultimately I didn't want to
          be locked into a government job where I could freely talk about what I was working on. Instead I opted to join a 
          small start up in Schenectady, New York called LAANCOR. 
        </p>

        <p>
          Before too long, the risks associated with being part of this small company outweighed any potential benefits (no stock 
          offerings, better pay elsewhere), so I started looking for a move and applied at a few places. One of my
          bolder choices was to look at Google. I got about halfway through the online resume sumbission until I hit a section
          that asked me to list all the publications I've authored. How foolish I felt, I dared think myself good enough to be hired
          by <i>Google</i>. I quickly closed the browser, and pushed the thought from my mind. And yet, as fate would have it, the
          resume uploaded anyway, and I got a call back, and eventually, a job offer.
        </p>

        <p>
          It's hard to remember quite what it truely felt like to be me fifteen years ago. I'd like to say that I was strong and
          confident, but I don't think that came till much later. Regardless, whether it was the atmosphere of Google, or some innate
          self doubt that always existed, I suffered from imposter syndrome pretty badly. It didn't help that my recruiter,
          when telling me that I got the job, worded it in such a way... I <i>scraped</i> by.
        </p>

        <p>
          I did well at Google, got promoted, was awarded a patent, learned an insane amount, but I think the doubt still held me back. Held me
          back from wanting to achieve more, and also held me back from really enjoying myself.  I was always afraid I would do something that
          showed everyone how much I didn't belong there. I didn't go to Harvard, or MIT. I graduated from SUNY Albany. Sometimes the technical
          terminology was overwhelming (I still hate the word proxy). I didn't push and after working eight years on
          the same team, I was bored of doing the same work, but too afraid to switch teams. It was also an interesting personal time in my
          life. Trying
          to get pregnant turned out to not be as easy as everyone tells you when you are eighteen. I was done with NYC, done with my three hour
          round trip commute into the city from Jersey, and done with the stress of feeling like a fraud. So when I finally did get pregnant, my
          husband and I moved home, and I started looking for a new job. One that would be simple, and easy. Some 9-5er I could handle
          as a new mom, with decent enough pay, but without requiring all that much focus or effort. I finally found the perfect spot at Informz, a five
          minute drive from my new home, with great reviews.
        </p>

        <p>
          It <i>was</i> exactly what I was looking for too. I could bang out code and features without breaking a sweat, and still make it home
          by 5:05 every night. What I failed to realize, is that I actually really enjoyed the technical atmosphere and challenges at Google.
          It wasn't satisfying enough, just to crank out features someone told me to write. If I didn't agree with the priorities, I 
          wanted a say. I wanted to propose new goals and plans that would not only revamp the legacy code (ASP! One file upload part of the software
          was written 20 years ago and not maintained since) but also revamp the customer experience. It was also around this time that I got my mojo
          back in terms of confidence. I was <i>good</i>, if I may say so myself. <i>Really good</i>.  I used that confidence and suggested such changes.
          At first, I didn't think it would work.
          There was a bit of <i>"what are doing? The CEO wrote that code, you aren't supposed to tell him it needs to go!"</i>. In case it didn't work, 
          I started lightly exploring other opportunities, focusing on 100% remote work. One company stood out, and it was the only place I applied
          to.
        </p>

        <p>
          That's how I ended up at Elastic. I applied, and after a long interview process, was given a job offer. I successfully negotiated my
           salary based on my previous Google salary, not my current salary in my little upstate NY town, and Informz could do nothing to compete.
           At Elastic, my confidence has continued to grow. I've never had so many opportunities for growth and learning. I joined the team
           as a Senior Software Engineer on a team of 20. I'm now one of three Tech Leads, leading a team of 80, with hundreds of other developers
           contributing code and using our services. The company, when I joined, was just about 300 people total, and pre IPO. We are now post IPO
           and about to reach 1,500 empployees. It's been a wild ride and has taught me a lot about myself, about leadership, and about how tech
           companies are run. I am so grateful for these opportunities, and to work alongside so many smart, and caring people, many of which I
           legitimately consider friends.
        </p>

        <p>
          Now I've reached the edge of my story, and I simply sit, experiencing the future unfolding before me.
        </p>
        <br/>
        <br/>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
