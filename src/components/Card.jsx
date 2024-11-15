import React from 'react'
import jobimg from '../assets/job.png'
import { Link } from 'react-router-dom';
function Card({image,company,shortdes,skill,title,location,apidate,description}) {

// console.log(description);

 
const formattedDate = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit'
}).format(new Date(apidate));
  return (
    <>
      <div className="card mt-3 shadow-sm mb-2">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="company-img">
              <img src={image} className="img-fluid rounded-start" alt="job" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{company}</p>
              <p className="card-text">
              Description: {description}
              </p>
              <div className='d-flex justify-content-between'>
                <p className="card-text">Skills : {skill}</p>
                <p className="card-text">Location : {location}</p>
              </div>
              <span className="card-text">
                <small className="text-body-secondary">Posted On :{formattedDate}</small>
              </span>

              <div className='d-flex justify-content-between mt-3'>
                <Link to="/applyForm" className='text-decoration-none'>
                <div className='apply-btn'>Apply</div></Link>

                <div className='view-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">View &#8594;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsModal des={description}/>
    </>
  )
}

export default Card


function DetailsModal({des}) {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Job description</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur commodi quisquam animi dolores doloribus aspernatur adipisci blanditiis esse quo perferendis.
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}