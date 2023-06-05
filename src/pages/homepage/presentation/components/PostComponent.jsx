import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostActionComp from "./PostActionComp";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import {BiDotsHorizontalRounded} from 'react-icons/bi'

// import CancelPresentationSharpIcon from '@mui/icons-material/CancelPresentationSharp';
import { Assets } from "../../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { likePost,addComment, removePost,editPost,reTweet } from "../../../../redux/slices/postSlice";
import './post-component.css'
import { useState,useRef } from "react";

 
// main component function

const PostComponent = ({ post, index }) => {
  const myId = "this_is--My--123Id";
  const [isOpen, setIsOpen] = useState(false)                 
  // const [reTweet, setReTweet] = useState(false)
  const [edit, setEdit] = useState(false)
  const [options, setOptions]=useState(false)
  const comment = useSelector(state=>state.addComment)

  // functions for handling click
  const handleClick = event=>{
    setOptions(current =>!current)
  }
  const handleEditClick = event=>{
    
    setEdit(current =>!current)
    
  }

// function for rendering post like 

  const dispatch = useDispatch();

  const handlePostLike = () => {
    dispatch(
      likePost({
        myId,
        postIndex: index,
      })
    );
  };

// function for rendering edit post

  const editRef = useRef(null);
  const handleEditPost = (newData) => {
    dispatch(
      editPost({
        newData: editRef.current.value,
        postIndex: index,
      })
    );
    editRef.current.value = "";
  };
  // const handleRemovePost = () => {
  //   dispatch(
  //     removePost(post)
  //   );
    
  // };
  const commentRef = useRef();
  
  // function for rendering comment
  const addNewComment = (event) => {
    event.preventDefault();
    dispatch(
      addComment({
        content: commentRef.current.value,
        likes: [],
        comments: [],
        retweet: [],
        postIndex:index
      })
    );
    commentRef.current.value = "";
  };
  // const initialPostText = { body:" "}
  // const [textValue, setTextValue] = useState(initialPostText)
  
  return (
    <section>
      <div className="flex gap-3 my-10">
        <img className="w-10 h-10 rounded-full" src={Assets.Avatar} alt="" />
        
        <div className="">
         <div className="h-divider d-flex justify-content-space-between">
         <div className="flex items-center gap-2">
            
            <h3 className="text-lg font-medium">Owen</h3>
            <p className="text-[rgba(0,0,0,.5)] text-sm">@Owen</p>
            <small className="text-[rgba(0,0,0,.5)] text-sm">May 5</small>
           
          </div>
          <div>
          <BiDotsHorizontalRounded className="dot-menu"style={{position:'relative', left:'6rem'}} onClick={handleClick}/>
            {
              options && (
                <ul className='mini-menu' style={{ marginLeft:'20rem', top:'26rem', width:'100px'}}>
                  <div className="m-m-btn">
                    <div className="m-btn-hover">
                         <button onClick={handleEditClick}>edit</button> <br />
                    </div>
                  
                
                  {
                    edit &&(
                      <div className="edit-div">
                        <div className="sub-edit-div">
                             <input required type="text" ref={editRef} /> <button className="edit-btn" onClick={handleEditPost} style={{width:'70p'}}>save</button>

                        </div>
                      </div>
                    )
                  }
                   <div className="m-btn-hover">
                       <button onClick={()=>{
                         dispatch(
                          removePost(post)
                        );
                        setOptions(false)
                       }}>delete</button>
                    </div>     
                  </div>
                </ul>
              )
            }
          </div> 
         </div>
          <p className="text-[#676a6e]" style={{position:'relative'}}>{post.content}</p>

          <div className="flex items-center mt-4 gap-8 "  >
            <div>
               <PostActionComp icon={FaRegComment}  onClick={()=>setIsOpen(true)}
              count={post.comments.length}   
              />
             
              {
                isOpen &&(
                  <div className="comment-div">
                    {/* {posts.map((post, index) => {
                      return (
                      // <PostComponent key={index} index={index} post={post} />;
                    })} */}
                    <input type="text" ref={commentRef} className="comment-input" required/>
                 
                  <button onClick={addNewComment}  className="reply" count={post.comments.length} >
                       Reply
                  </button>
                  </div>
                )
              }
            </div>
           
           <div>
           <PostActionComp
              icon={AiOutlineRetweet}
              onClick={()=>dispatch(reTweet(post))}
              count={post.retweet.length}
            />
            {/* {
              reTweet &&(
                <div>
                  
                </div>
              )
            } */}
           </div>
            <PostActionComp
              onClick={handlePostLike}
              icon={AiOutlineHeart}
              count={post.likes.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostComponent;
