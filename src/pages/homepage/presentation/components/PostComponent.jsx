import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostActionComp from "./PostActionComp";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import {BiDotsHorizontalRounded} from 'react-icons/bi'

// import CancelPresentationSharpIcon from '@mui/icons-material/CancelPresentationSharp';
import { Assets } from "../../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { likePost,addComment, removePost,editPost } from "../../../../redux/slices/postSlice";
import './post-component.css'
import { useState,useRef } from "react";


const PostComponent = ({ post, index }) => {
  const myId = "this_is--My--123Id";
  const [isOpen, setIsOpen] = useState(false)
  const [reTweet, setReTweet] = useState(false)
  const [edit, setEdit] = useState(false)
  const [options, setOptions]=useState(false)
  // const comment = useSelector(state=>state.addComment)
  const handleClick = event=>{
    setOptions(current =>!current)
    
  }

  const dispatch = useDispatch();

  const handlePostLike = () => {
    dispatch(
      likePost({
        myId,
        postIndex: index,
      })
    );
  };
  const editRef = useRef();
  const handleEditPost = (newData) => {
    dispatch(
      editPost({
        content:editRef.current.value,
        postIndex: index,
      })
    );
    editRef.current.value = "";
  };
  const handleRemovePost = () => {
    dispatch(
      removePost({
        
        postIndex: index,
      })
    );
    
  };
  const commentRef = useRef();
  
  const commentDispatch = useDispatch();
  const addNewComment = (event) => {
    event.preventDefault();
    commentDispatch(
      addComment({
        content: commentRef.current.value,
        likes: [],
        comments: [],
        retweet: []
      })
    );
    commentRef.current.value = "";
  };
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
          <BiDotsHorizontalRounded className=""style={{position:'relative', left:'25rem'}} onClick={handleClick}/>
            {
              options && (
                <ul style={{border:'1px solid grey', position:'absolute', left:'43rem', top:'26rem', width:'100px',borderRadius:'15px'}}>
                  <button onClick={()=>setEdit(true)}>edit</button>
                  {
                    edit &&(
                      <div className="edit-div">
                        <input type="text" ref={editRef} /> <button onClick={handleEditPost}>edit</button>
                      </div>
                    )
                  }
                  <button onClick={handleRemovePost}>delete</button>
                </ul>
              )
            }
          </div> 
         </div>
          <p className="text-[#676a6e]" style={{position:'relative'}}>{post.content}</p>

          <div className="flex items-center mt-4 gap-8 "  >
            <div>
               <PostActionComp icon={FaRegComment}  onClick={()=>setIsOpen(!options)}
              count={post.comments.length}   
              />
             
              {
                isOpen &&(
                  <div className="comment-div">
                    {/* {posts.map((post, index) => {
                      return (
                      // <PostComponent key={index} index={index} post={post} />;
                    })} */}
                    <input type="text" ref={commentRef} className="comment-input"/>
                 
                  <button onClick={addNewComment} onChange={()=>setIsOpen(false)} className="reply" count={post.comments.length} >
                       Reply
                  </button>
                  </div>
                )
              }
            </div>
           
           <div>
           <PostActionComp
              icon={AiOutlineRetweet}
              onClick={()=>setReTweet(true)}
              count={post.retweet.length}
            />
            {
              reTweet &&(
                <div>
                  
                </div>
              )
            }
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
