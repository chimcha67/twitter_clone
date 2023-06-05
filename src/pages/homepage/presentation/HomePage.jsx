import React from "react";

import TweetComponent from "./components/TweetComponent";
import PostComponent from "./components/PostComponent";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
// import CloseIcon from '@material-ui/icons/Close'
import { Row, Col, Container} from "react-bootstrap";
import { useState } from "react";
import dataValues from "../controller/Helper";


// homepage components

const HomePage = () => {
  const posts = useSelector((state) => state.posts.posts);        // useSelector for fetching part of our posts data from the store
  const [options, setOptions]=useState(false)

  // const handleClick = event=>{
  //   setOptions(current =>!current)
    
  // }

   
// function and state for see more button

  const [showMore, setShowMore] = useState(4)
  const showMoreItems =()=>{
    setShowMore(preValue=>preValue + 3)
  }

// funtion and state for filtering items from the search bar


  const [filteredData, setFilteredData] = useState([])
  const handleFilter = (event)=>{
    const searchedWord = event.target.value
    const newFilter = dataValues.filter((value)=>{
          return value.heading.toLowerCase().includes(searchedWord.toLowerCase())
    })
    setFilteredData(newFilter)
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
                        
                {/* {filteredData.length > 0?<AiOutlineSearch  className="search-icon mt-2 font-lg"/>: <p id= 'clear-btn' className="search-icon2 mt-2 font-xl ">X</p>} */}
                <AiOutlineSearch  className="search-icon mt-2 font-lg"/>
                <input type="text" onChange={handleFilter} {...dataValues} style={{width:'100%', border:'none', outline:'none', paddingLeft:'13px'}}/>
              </div>
              <div className="trends">
                <h1>Trends for you</h1>
                <div className="">
                  { filteredData.length===0? 
                      dataValues.slice(0, showMore).map((item, id)=>{
                        return(
                          <div key={id}>
                              <div className="trend1">
                                <div className="flexCenter icon ml-auto">
                                  {item.icon}
                                </div>
                                <span>{item.location}</span> 
                                <h4>{item.heading}</h4>
                                <span>{item.tweet}</span>
                              </div>
                          </div>
                        )
                      })
                      :
                     (
                       filteredData.map((item, id)=>{
                         return(
                           <div key={id}>
                               <div className="trend1">
                                 <div className="flexCenter icon ml-auto">
                                   {item.icon}
                                 </div>
                                 <span>{item.location}</span> 
                                 <h4>{item.heading}</h4>
                                 <span>{item.tweet}</span>
                               </div>
                           </div>
                         )
                       })
                     )
                  }
              
                <button onClick={showMoreItems}>Show more..</button>
              </div>
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
