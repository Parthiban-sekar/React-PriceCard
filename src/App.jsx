import React from 'react'
import Card from './components/Card'

function App() {
  const data = [{
    plan:"FREE",
    price:0,
    user:"Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    ispublicProjects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateProjects:false,
    support:"Phone Support",
    isSupport:false,
    subdomain:"Free SubDomain",
    isSubdomain:false,
    reports:"Monthly Status Reports",
    isReports:false

  },
  {
    plan:"PLUS",
    price:9,
    user:"5 User",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    ispublicProjects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    support:"Phone Support",
    isSupport:true,
    subdomain:"Free SubDomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    plan:"PRO",
    price:49,
    user:"Unlimited User",
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    ispublicProjects:true,
    access:"Community Access",
    isAccess:true,
    privateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    support:"Phone Support",
    isSupport:true,
    subdomain:"Free SubDomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:true
  }]
  return (<>
    
<section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
      data.map((ele,i)=>{
        return< Card dataCard={ele} key={i}/>
      })
    }
    </div>
  </div>
</section>

 </> )
}

export default App