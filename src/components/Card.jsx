import React from 'react'

function Card({dataCard}) {
    console.log(dataCard);
  return (
    <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{dataCard.plan }</h5>
        <h6 className="card-price text-center">${dataCard.price}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
          <li className={dataCard.isUser?"":"text-muted"}><span className="fa-li"><i className={dataCard.isUser?"fas fa-check":"fas fa-times"}></i></span>{dataCard.plan!=="FREE"?<b>{dataCard.user}</b>:<>{dataCard.user}</> }</li>
          <li className={dataCard.isStorage?"":"text-muted"}><span className="fa-li"><i className={dataCard.isStorage?"fas fa-check":"fas fa-times"}></i></span>{dataCard.storage}</li>
          <li className={dataCard.ispublicProjects?"":"text-muted"}><span className="fa-li"><i className={dataCard.ispublicProjects?"fas fa-check":"fas fa-times"}></i></span>{dataCard.publicProjects}</li>
          <li className={dataCard.isAccess?"":"text-muted"}><span className="fa-li"><i className={dataCard.isAccess?"fas fa-check":"fas fa-times"}></i></span>{dataCard.access}</li>
          <li className={dataCard.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={dataCard.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{dataCard.privateProjects}</li>
          <li className={dataCard.isSupport?"":"text-muted"}><span className="fa-li"><i className={dataCard.isSupport?"fas fa-check":"fas fa-times"}></i></span>{dataCard.plan==="PRO"?<><b>UnLimited</b> {dataCard.support}</>:<>{dataCard.support}</>}</li>
          <li className={dataCard.isReports ?"":"text-muted"}><span className="fa-li"><i className={dataCard.isReports?"fas fa-check":"fas fa-times"}></i></span>{dataCard.reports}</li>
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card