import React from 'react'
import AllCard from './AllCard'

function Cyber() {
  let data=[
    {
      title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      di:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp"
    },
    {
      title:"What Is Hacking? Types of Hacking & More",
      di:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"
    },
    {
      title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      di:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png"
    },
    {
      title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      di:"Look around today, you will witness that we are more reliant on technology and devices",
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif"
    },
    {
      title:"8 Different Types of Cybersecurity and Threats Involved",
      di:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png"
    },
    {
      title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      di:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif"
    },
  ]
  return <div className="container">
  <div className="row">
      {
        data.map((e,i)=>{
          return <AllCard cardData={e} key={i}/>
        })
      }
  </div> 
</div>
}

export default Cyber