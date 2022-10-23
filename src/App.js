import  React from 'react';
import './App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineFileGif, AiOutlinePicture, AiOutlineSearch, AiOutlineTwitter} from 'react-icons/ai'
import {BiHomeCircle, BiHash,BiBell} from 'react-icons/bi'
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md'
import {FaUserCircle,FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa'
import {BsCardText} from 'react-icons/bs'
import {AiTwotoneStar} from 'react-icons/ai'
import {AiOutlineSmile} from 'react-icons/ai'
import {BsUpload} from 'react-icons/bs'
import {BsGear} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <div className = "Main">

      
        <div className="Navbar_Area">
          <div className="Twitter">
            <AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem"/>
          </div>
         <div className="icons">
          <BiHomeCircle color="#1DA1F2" fontSize="2rem"/>
          <div>Home</div>
         </div>
         <div className="icons">
          <BiHash color="#1DA1F2" fontSize="2rem"/>
          <div>Explore</div>
         </div>
         <div className="icons">
          <BiBell color="#1DA1F2" fontSize="2rem"/>
          <div>Notification</div>
         </div>
         <div className="icons">
          <MdMailOutline color="#1DA1F2" fontSize="2rem"/>
          <div>Messages</div>
         </div>
         <div className="icons">
          <MdBookmarkBorder color="#1DA1F2" fontSize="2rem"/>
          <div>Bookmarks</div>
         </div>
         <div className="icons">
          <BsCardText color="#1DA1F2" fontSize="2rem"/>
          <div>Lists</div>
         </div>
         <div className="icons">
          <FaUserCircle color="#1DA1F2" fontSize="2rem"/>
          <div>Profiles</div>
         </div>
         <div className="icons">
          <FaEllipsisH color="#1DA1F2" fontSize="2rem"/>
          <div>More</div>
         </div>
         <div className="icons">
          <button className="btn">
            Tweet
          </button>
        
         </div>

        </div>
        <div className = "Main_Area">
          <div className="Home">
            <div className="home">
              Home
            </div>
            <div className="Star_icon">
              <AiTwotoneStar color="#1DA1F2" fontSize="2rem"/>
            </div>
          </div>
          <br></br>
      <div className="Create_post">
        <div className="Add-text">
          <div className="Profile">
           <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"  alt="dp" style={{height:"35px",width:"35px", borderRadius:"50%"}}/>           
          
          
          </div>
        </div>
        
        <div className="Btns">
        <div className="Icon">
          <div className="Btns_icon">
            <AiOutlinePicture fontSize="1.5rem" color="1DA1F2"/>
          </div>
          <div className="Btns_icon">
            <AiOutlineFileGif fontSize="1.5rem" color="1DA1F2"/>
          </div>
          <div className="Btns_icon">
            <AiOutlineAlignLeft fontSize="1.5rem" color="1DA1F2"/>
          </div>
          <div className="Btns_icon">
            <AiOutlineSmile fontSize="1.5rem" color="1DA1F2"/>
          </div>
           </div>
          <div className="Tweets">
          <input type="Post"  placeholder="What's Happening" />
            <button className="btns-tweet">
              Tweet
            </button>
          </div>
      </div>
    </div>
    <div className="Posted_Area">
      <div className="Profile">
      <div className="User_Detail">
      <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="logo" style={{height:"30px", width:"30px",borderRadius:"50%"}}/>
      <div className="User_Name">Shubham Kumar</div>
      <div className="User_id">@Shubham Kumar</div>
    </div>
    <div clasName="Drop_Down">
    <AiOutlineDown fontSize="1rem"/>

                  </div>
              </div>
              <div className="Quotes">
              Happy Diwali
              </div>
            <br></br>
            <div className="Profile_Images">
              <img src="https://pbs.twimg.com/media/EH2d35XXkAAv-mF.jpg" alt="Profile" style={{width: "100%", height:"23rem",objectFit:"fill"}}/>
            </div>
          <div className="Comment_Section">
             <div className="Comment">
             <FaRegComment frontSize="1.4rem"/>
            </div>     
            <div className="Comment">
             <FaRetweet frontSize="1.4rem"/>
            </div>
            <div className="Comment">
             <FaRegHeart frontSize="1.4rem"/>
            </div>
            <div className="Comment">
             <BsUpload frontSize="1.4rem"/>
            </div>
          </div>
       </div>
       <br></br>
       <div className="Posted_Area">
      <div className="Profile">
      <div className="User_Detail">
      <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="logo" style={{height:"30px", width:"30px",borderRadius:"50%"}}/>
      <div className="User_Name">Shubham Kumar</div>
      <div className="User_id">@Shubham Kumar</div>
    </div>
    <div clasName="Drop_Down">
    <AiOutlineDown fontSize="1rem"/>

                  </div>
              </div>
              <div className="Quotes">
              Mountains, Trees and Lake.   
              </div>
            <br></br>
            <div className="Profile_Images">
              <img src="https://wallpapercave.com/wp/wp3394149.jpg" alt="Profile" style={{width: "100%", height:"23rem",objectFit:"fill"}}/>
            </div>
          <div className="Comment_Section">
             <div className="Comment">
             <FaRegComment frontSize="1.4rem"/>
            </div>     
            <div className="Comment">
             <FaRetweet frontSize="1.4rem"/>
            </div>
            <div className="Comment">
             <FaRegHeart frontSize="1.4rem"/>
            </div>
            <div className="Comment">
             <BsUpload frontSize="1.4rem"/>
            </div>
          </div>
       </div>
       <br></br>
       <div className="Posted_Area">
      <div className="Profile">
      <div className="User_Detail">
      <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="logo" style={{height:"30px", width:"30px",borderRadius:"50%"}}/>
      <div className="User_Name">Shubham Kumar</div>
      <div className="User_id">@Shubham Kumar</div>
    </div>
    <div clasName="Drop_Down">
    <AiOutlineDown fontSize="1rem"/>

                  </div>
              </div>
              <div className="Quotes">
              Beauty of Nature,Beautiful Landscape
              </div>
            <br></br>
            <div className="Profile_Images">
              <img src="https://pbs.twimg.com/media/Fbg2xScXgAArow_.jpg" alt="Profile" style={{width: "100%", height:"23rem",objectFit:"fill"}}/>
            </div>
          <div className="Comment_Section">
             <div className="Comment">
             <FaRegComment frontSize="1.4rem"/>
            </div>     
            <div className="Comment">
             <FaRetweet frontSize="1.4rem"/>
            </div>
            <div className="Comment">
             <FaRegHeart frontSize="1.4rem"/>
            </div>
            <div className="Comment">
             <BsUpload frontSize="1.4rem"/>
            </div>
          </div>
       </div>
    </div>
        <div className="Right_Navbar_Area">
          <div className="Search">
           <AiOutlineSearch fontSize="1.5rem" style={{borderRadius:"50%"}}/>
           <div className="Search_Input">
             <input type="Search" placeholder="Search Twitter"/>
           </div>
          </div>
          <br></br>
          <div className="Container">
            <div className="Trends">
              <div className="Trends_4u">
                Trends for you
              </div>
              <div className="Setting_icon">
                <BsGear fontSize="1.5rem" color="#1DA1F2"/>
               </div>
            </div>
            <div className="Trending_WorldWide">
             <div className="Trending_Show">
              Trending Worldwide
              </div>
              <div className="tag">
                #WorldNews
                </div> 
                <div className="Tweet_People">
                  150k
                </div>
                <div className="Tweets">
                  6095 people are tweeting this
                </div>
            </div>
            <div className="Trending_WorldWide">
             <div className="Trending_Show">
              Trending Worldwide
              </div>
              <div className="tag">
               #elonmusk 
                </div> 
                <div className="Tweet_People">
                  350k
                </div>
                <div className="Tweets">
                  1,034 people are tweeting this
                </div>
            </div>
            <div className="Trending_WorldWide">
             <div className="Trending_Show">
              Trending Worldwide
              </div>
              <div className="tag">
               #Google #Amazon
                </div> 
                <div className="Tweet_People">
                  897k
                </div>
                <div className="Tweets">
                  5,789 people are tweeting this
                </div>
            </div>
            <div className="Trending_WorldWide">
             <div className="Trending_Show">
              Trending Worldwide
              </div>
              <div className="tag">
                #BreakingNews
                </div> 
                <div className="Tweet_People">
                  120k
                </div>
                <div className="Tweets">
                  2,685 people are tweeting this
                </div>
            </div>
            <br></br>
          <div className="See_More">
            See More
          </div>
          </div>
        </div>
      </div>
  </div>
  );
 }
export default App;
