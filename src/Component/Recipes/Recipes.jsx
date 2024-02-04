import axios from 'axios'
import React, {useEffect, useState } from 'react'
import './Recipes.css'
export default function Recipes() {
 
  const[allRecipe,setAllRecipe]=useState([]);

  useEffect(()=>{
    getAllRecipe()
        },[])
  let getAllRecipe=async()=>{
    try {
      let{data}=await axios.get(" https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    setAllRecipe(data?.meals);
      console.log(data);
    } 
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div className='text-center pt-5'>
      <h3 style={{'color':'#C98A40','fontSize':'75px'}}>RECIPES </h3>
    </div>
    <div className='container w-75 m-auto'>
<div className='row gy-4 '>
 {
 allRecipe.slice(0,3).map(function(view,index){
  return <div key={index} className='col-md-4'>
    <div className='item rounded-4 bg-gray'>

<img src={view.strMealThumb} className='w-100 rounded-3'  alt="meals"/>
<h6 style={{'color':'#C98A40'}}>{view.strMeal}</h6>
<p>Lorem ipsum dolor sit amet consectetur elit. Eius, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ratione.</p>
    </div>
  </div>
 })}
</div>
    </div>
<div className='text-center'><button className='rounded-button  m-3 '>Register</button></div>

    </>
  )
}
