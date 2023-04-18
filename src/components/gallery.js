import React, {useState} from 'react';
//import './Gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";

import image1 from '../components/galleryImages/image1.jpg';
import image2 from '../components/galleryImages/image2.jpg';
import image3 from '../components/galleryImages/image3.jpg';

import img1 from '../components/galleryImages/img1.jpg';
import img2 from '../components/galleryImages/img2.jpeg';

import gallimg from '../svgs/gallery.svg';

function Gallery(){
    let images_hospital = [
        {
            id:1,
            imgSrc:image1,
        },{
            id:2, 
            imgSrc:image2,
        },{
            id:3,
            imgSrc:image3,
         },//{
        //     id:4,
        //     imgSrc:img4_18,
        // },{
        //     id:5,
        //     imgSrc:img5_18,
        // },{
        //     id:6,
        //     imgSrc:img6_18,
        // },{
        //     id:7,
        //     imgSrc:img7_18,
        // },{
        //     id:8,
        //     imgSrc:img8_18,
        // },{
        //     id:9,
        //     imgSrc:img9_18,
        // },{
        //     id:10,
        //     imgSrc:img10_18,
        // },       
    ] 
    let images_orphanage = [
        {
            id:1,
            imgSrc:img1,
        },{
            id:2, 
            imgSrc:img2,
         },//{
        //     id:3,
        //     imgSrc:img3_19,
        // },{
        //     id:4,
        //     imgSrc:img4_19,
        // },{
        //     id:5,
        //     imgSrc:img5_19,
        // },{
        //     id:6,
        //     imgSrc:img6_19,
        // },{
        //     id:7,
        //     imgSrc:img7_19,
        // },{
        //     id:8,
        //     imgSrc:img8_19,
        // },{
        //     id:9,
        //     imgSrc:img9_19,
        // },{
        //     id:10,
        //     imgSrc:img10_19,
        // },{
        //     id:10,
        //     imgSrc:img11_19,
        // },{
        //     id:10,
        //     imgSrc:img12_19,
        // }, {
        //     id:13,
        //     imgSrc:img13_19,
        // },{
        //     id:14,
        //     imgSrc:img14_19,
        // },{
        //     id:15,
        //     imgSrc:img15_19,
        // },       
    ] 

    const[model, setModel]= useState(false);
    const[tempimgSrc, setTempImgSrc]= useState('');
    
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
        <div className="head">
            <div className="headimg">
            <img id="projmainimage" src={gallimg} alt="Project Img"/>
            </div>
            <div className="headtxt">
            <h1>
                Initiatives
            </h1>
            <br></br>
            <h5 id="headsubtext">
                Following are some memories captured in picture of all the events and sessions in SIP since 2018. 
            </h5>
            </div>
        </div>
        <hr/>

        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} alt=""/>
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>

        <div>
            <h6 className="cancel">        
               <Link className="cancel" to="/events" ><h6>Go Back</h6></Link>
            </h6>
        </div>

        {/* <h1 style={{padding:'2%'}}>2022</h1>
        <div className="gallery">
            {images_22.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}} alt=""/>
                    </div>
                )
            })}
        </div>

        <h1 style={{padding:'2%'}}>2021</h1>
        <div className="gallery">
            {images_21.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}} alt=""/>
                    </div>
                )
            })}
        </div> */}

        <h1 style={{padding:'2%'}}>Hospital</h1>
        <div className="gallery">
            {images_hospital.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}} alt=""/>
                    </div>
                )
            })}
        </div>

        <h1 style={{padding:'2%'}}>Oraphanage</h1>
        <div className="gallery">
            {images_orphanage.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}} alt=""/>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;
