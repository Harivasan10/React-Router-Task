import React from 'react'
import AllCard from './AllCard'
function All() {
  let data=[
    {
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      di:`Are you interested in becoming a full-stack developer but not sure where to start? In this blog,`, 
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp"
    }, {
      title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
      di:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp"
    },{
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      di:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp"
    }, {
      title:"Best Books to Learn Full-Stack Development",
      di:"Are you interested in becoming a full-stack developer but not sure where to start? In",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp"
    },{
      title:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      di:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp"
    }, {
      title:"7 Best Full-Stack Development Online Courses [2024]",
      di:"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp"
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

export default All