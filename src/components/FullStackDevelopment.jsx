import React from 'react'
import AllCard from './AllCard'

function FullStackDevelopment() {
  let data=[
    {
      title:"Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      di:"As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp"
    },
    {
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      di:"When you’re hiring a full-stack developer, what are the most important things you look for?",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp"
    },
    {
      title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
      di:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp"
    },
    {
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      di:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp"
    }, {
      title:"Best Books to Learn Full-Stack Development",
      di:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp"
    }, {
      title:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      di:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp"
    }
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

export default FullStackDevelopment