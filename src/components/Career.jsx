import React from 'react'
import AllCard from './AllCard'

function Career() {
  let data=[
    {
      title:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      di:"If your New Year resolution consists of building a successful tech career in 2024, then",
      img:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp"
    },
    {
      title:"UI/UX Designer Job Description and Roles & Responsibilities",
      di:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg"
    },
    {
      title:"Top 5 IT Jobs for Economics Students",
      di:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp"
    },
    {
      title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
      di:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp"
    },
    {
      title:"Automation Test Engineer Resume: 10 Important Things To Consider",
      di:"The world is moving towards automating the testing of products in order to increase work",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp"
    },
    {
      title:"Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      di:"The world is moving towards modernization leading to an increase in the popularity of civil",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp"
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

export default Career