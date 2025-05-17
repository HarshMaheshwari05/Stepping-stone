import React from 'react'
import './categories.css'
import {styled} from '@mui/material'
import { Link, useSearchParams } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DevicesIcon from '@mui/icons-material/Devices';
import BlurOnIcon from '@mui/icons-material/BlurOn';
// import DvrIcon from '@mui/icons-material/Dvr';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { categories } from '../../constants/data';
function Categories() {
    const [searchParams] = useSearchParams();
     const category = searchParams.get('category');
  return (
        <>
            
        <section className="categories">
            <div className=" categories_container">
                <div className="categories_left">
                    <h1>Categories</h1>
                    <p>
                        Find your desired course to follow along and also share a course containing how you master your skills!!
                    </p>
                    <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
           
                    <a href="index.html" className="btn" >Create Course </a>
                    </Link>
                </div>
                <div className="categories__right">
                 
                         <article className="category">
                            <span className="category__icon">
                           <DensitySmallIcon></DensitySmallIcon>
                            </span>
                            <Link to={"/"}>
                                <h5>All Categories</h5> 
                               
                             </Link>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
                        </article>
                        <article className="category">
                            <span className="category__icon">
                            <AutoStoriesIcon></AutoStoriesIcon>
                            </span>
                            <Link  to={`/?category=${categories[0].type}`}>
                            <h5>{categories[0].type}</h5>
                                 
                            </Link>
                          
                           
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <DevicesIcon></DevicesIcon>
                            </span>
                            <Link  to={`/?category=${categories[1].type}`}>
                            <h5>{categories[1].type}</h5>
                                 
                            </Link>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <CodeIcon></CodeIcon>
                            </span>
                            <Link  to={`/?category=${categories[2].type}`}>
                            <h5>{categories[2].type}</h5>
                                 
                            </Link>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <EmojiPeopleIcon></EmojiPeopleIcon>
                            </span>
                            <Link  to={`/?category=${categories[3].type}`}>
                            <h5>{categories[3].type}</h5>
                                 
                            </Link>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
                        </article>
                        
                        <article className="category">
                            <span className="category__icon">
                           <BlurOnIcon ></BlurOnIcon >
                            </span>
                            <Link  to={`/?category=${categories[4].type}`}>
                            <h5>{categories[4].type}</h5>
                                 
                            </Link>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
                        </article>
                       
                    </div>
                
            </div>
        </section>


        </>
  )
}

export default Categories




// <article className="category">
// <span className="category__icon">
// <AutoStoriesIcon></AutoStoriesIcon>
// </span>
// <Link  to={"/?category=Interview"}>
// <h5>Interview Prep</h5>
     
// </Link>


// {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
// </article>

// <article className="category">
// <span className="category__icon">
// <DevicesIcon></DevicesIcon>
// </span>
// <Link  to={"/?category=Development"}>
// <h5>Development</h5>
     
// </Link>
// {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
// </article>

// <article className="category">
// <span className="category__icon">
// <CodeIcon></CodeIcon>
// </span>
// <Link  to={"/?category=Programming"}>
// <h5>Programming</h5>
     
// </Link>
// {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
// </article>

// <article className="category">
// <span className="category__icon">
// <EmojiPeopleIcon></EmojiPeopleIcon>
// </span>
// <Link  to={"/?category=Experience"}>
// <h5>Job Experience</h5>
     
// </Link>
// {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
// </article>

// <article className="category">
// <span className="category__icon">
// <BlurOnIcon ></BlurOnIcon >
// </span>
// <Link  to={"/?category=Other"}>
// <h5>Others</h5>
     
// </Link>
// {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p> */}
// </article>