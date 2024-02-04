import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <>
    <div className='home'>
        <div className='w-75 parent m-auto'>
        <div className='text-center'>
        <p>Peachy Pup Bakery</p>
        </div>
        <div className='logo'>
    <img src={require('../../assets/bread.png')} className='w-75'/>
</div>
<div className='content p-5'>
<h4>Tasty pastries</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p>   Lorem Ipsum has been the industry's standard dummy text ever since the</p>
<button className='rounded-button '>recipes </button>
</div>
<div className='text-center phone'>
    <p>phone:+7 700 000 00 00</p>
</div>
<div className='hero'> 
    <img src={require('../../assets/hero-background1.png')} className='w-25'/>
</div>
        </div>
    </div>
    </>
  )
}
