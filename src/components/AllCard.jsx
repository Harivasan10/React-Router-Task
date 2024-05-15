import React from 'react'

function AllCard({cardData}) {
    let data=cardData;
  return (
    <div className="col-lg-4 col-sm-6 mb-4" id='card'>
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={`${data.img}`} alt=""/></a>
        <div className="card-body">
          <h5 className="card-title">
           {data.title}
          </h5>
          <p className="card-text">{data.di}</p>
        </div>
      </div>
    </div>
  )
}

export default AllCard