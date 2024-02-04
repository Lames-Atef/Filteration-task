import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
    <div className='about  pt-5'>
    <div className=' container ' >
<div className='row gy-4'>
  <div className='col-md-6  '>

<div className='text-center'>
  <h3 style={{'fontSize':'30px'}}>ABOUT
    <br/>US
  </h3>
</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat enim velit necessitatibus magnam eaque nemo ratione minus impedit illo vitae tempora exercitationem, voluptates repellendus iusto, voluptas temporibus aliquid praesentium laboriosam. Non ipsum maxime eum! Hic veniam exercitationem illum, deleniti aliquid est delectus libero? Tempore quasi, voluptates quis illum ducimus reprehenderit.</p>
<div className='text-center'><button  className='rounded-button m-3 '>Register</button></div>

</div>
    <div className='col-md-6'>
<img src={require('../../assets/about.png')}  alt="men"  />
    </div> 
</div>
    </div>
    </div>
   
    </>
  )
}
