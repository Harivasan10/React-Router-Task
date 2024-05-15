import React from 'react'
import AllCard from './AllCard'

function DataSc() {
  let data=[
    {
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      di:"Are you someone who’s not interested in coding, but wants to get placed in tech",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
    },
    {
      title:"Impact of Certification Programs on Hiring Data Scientists",
      di:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp"
    },
    {
      title:"Top Product-Based Companies for Data Science Freshers",
      di:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp"
    },
    {
      title:"What is the Difference between Data Science and Data Engineering?",
      di:"India has been making some serious waves in the world of data. Just like the",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp"
    },
    {
      title:"Top 10 Data Science Tools in 2024",
      di:"Data Science is an in-demand profession and will continue growing in the coming years. From",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png"
    },
    {
      title:"Best Data Science Books to Learn in 2024",
      di:"Today, we’re going to talk about something really cool: data science. It’s all about usin",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp"
    }
  ]
  return<div className="container">
  <div className="row">
      {
        data.map((e,i)=>{
          return <AllCard cardData={e} key={i}/>
        })
      }
  </div> 
</div>
}

export default DataSc