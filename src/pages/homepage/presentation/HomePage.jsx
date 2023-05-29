import React from "react";

import TweetComponent from "./components/TweetComponent";
import PostComponent from "./components/PostComponent";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Row, Col, Container} from "react-bootstrap";
import { useState } from "react";

const HomePage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [options, setOptions]=useState(false)
  const handleClick = event=>{
    setOptions(current =>!current)
    
  }
  return (
    <>
      <div className="grid grid-cols-12 w-full f-s-sec">
        <div className="col-span-8">
          <h3 className="text-xl font-bold">Home</h3>

          <TweetComponent />

          {posts.map((post, index) => {
            return <PostComponent key={index} index={index} post={post} />;
          })}
        </div>
        <div className="right-section">
      <Container >
        <Row>
        <Col lg={8} md ={8}>
              
          </Col>
          <Col className="">
              <div className="search-section d-flex flex-row ml-auto justify-content-left" >
                <AiOutlineSearch className="search-icon mt-2 font-lg"/>
                <input type="text" style={{width:'100%', border:'none', outline:'none', paddingLeft:'13px'}}/>
              </div>
              <div className="trends">
                <h1>Trends for you</h1>
                <div className="trend1">
                  <span>
                    Trending in Nigeria
                  </span>
                  <div>
                    <BiDotsHorizontalRounded className=""style={{position:'relative', left:'16rem', top:'-20px'}} onClick={handleClick}/>
                    {
                      options && (
                        <ul style={{border:'1px solid grey', position:'absolute', left:'8rem', top:'6rem', width:'100px',borderRadius:'15px'}}>
                          
                          {/* <button onClick={handleEditPost}>edit</button>
                          <button onClick={handleRemovePost}>delete</button> */}
                        </ul>
                      )
                    }
                 </div> 
                  <h4>Germany</h4>
                  <span>92.8K Tweets</span>
                </div>
                <div className="trend1">
                  <span>
                    Trending 
                  </span>
                  <div>
                    <BiDotsHorizontalRounded className=""style={{position:'relative', left:'16rem', top:'-20px'}} onClick={handleClick}/>
                    {
                      options && (
                        <ul style={{border:'1px solid grey', position:'absolute', left:'6rem', top:'4rem', width:'100px',borderRadius:'15px'}}>
                          
                          {/* <button >edit</button>
                          <button >delete</button> */}
                        </ul>
                      )
                    }
                 </div> 
                  <h4>LGBTQIA</h4>
                  <span>12.8K Tweets</span>
                </div>
                <div className="trend1">
                  <span>
                    Trending in Nigeria
                  </span>
                  <div>
                    <BiDotsHorizontalRounded className=""style={{position:'relative', left:'16rem', top:'-20px'}} onClick={handleClick}/>
                    {
                      options && (
                        <ul style={{border:'1px solid grey', position:'absolute', left:'6rem', top:'6rem', width:'100px',borderRadius:'15px'}}>
                          
                          {/* <button onClick={handleEditPost}>edit</button>
                          <button onClick={handleRemovePost}>delete</button> */}
                        </ul>
                      )
                    }
                 </div> 
                  <h4>Asake</h4>
                  <span>14.9K Tweets</span>
                </div>
                <div className="trend1">
                  <span>
                    Trending in Nigeria
                  </span>
                  <div>
                    <BiDotsHorizontalRounded className=""style={{position:'relative', left:'16rem', top:'-20px'}} onClick={handleClick}/>
                    {
                      options && (
                        <ul style={{border:'1px solid grey', position:'absolute', left:'6rem', top:'6rem', width:'100px',borderRadius:'15px'}}>
                          <li>option</li>
                          {/* <button onClick={handleEditPost}>edit</button>
                          <button onClick={handleRemovePost}>delete</button> */}
                        </ul>
                      )
                    }
                 </div> 
                  <h4>Omah</h4>
                  <span>5003 Tweets</span>
                </div>
                <a href="">Show more..</a>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
      </div>
    </>
  );
};

export default HomePage;
