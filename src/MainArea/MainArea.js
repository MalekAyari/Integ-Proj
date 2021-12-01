import React from 'react'
import './MainArea.css'
import { MdHome, MdVideoLibrary, MdHistory, MdWatchLater, MdPlaylistPlay, MdRssFeed } from 'react-icons/md'
import { FaFutbol, FaGripfire, FaNewspaper } from 'react-icons/fa'
import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { GiGamepad } from 'react-icons/gi'
import ReactPlayer from 'react-player' 


function MainArea(){
    return (
        <div className="MainArea">
            <div className="sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red" fontsize="3rem"/>
                        <div>home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey" fontsize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey" fontsize="3rem"/>
                        <div>Subscription</div>
                    </div>
                    <div className="Library">
                        <div className="Quick_Icon">
                            <MdHome color="grey" fontsize="3rem"/>
                            <div>home</div>
                        </div>
                        <div className="Quick_Icon">
                            <MdVideoLibrary color="grey" fontsize="3rem"/>
                            <div>Library</div>
                        </div>
                        <div className="Quick_Icon">
                            <MdHistory color="grey" fontsize="3rem"/>
                            <div>History</div>
                        </div>
                        <div className="Quick_Icon">
                            <MdWatchLater color="grey" fontsize="3rem"/>
                            <div>Watch Later</div>
                        </div>
                        <div className="Quick_Icon">
                            <MdPlaylistPlay color="grey" fontsize="3rem"/>
                            <div>Youtube Clone</div>
                        </div>
                    </div>
                    <div className="More_From_Youtube">
                        <div className="Quick_Icon">
                            <GiGamepad color="grey" fontsize="3rem"/>
                            <div>Gaming</div>
                        </div>
                        <div className="Quick_Icon">
                            <MdRssFeed color="grey" fontsize="3rem"/>
                            <div>Watch Later</div>
                        </div>
                        <div className="Quick_Icon">
                            <FaFutbol color="grey" fontsize="3rem"/>
                            <div>Sports</div>
                        </div>
                        <div className="Quick_Icon">
                            <FaNewspaper color="grey" fontsize="3rem"/>
                            <div>
                                News
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Main">
                <div className="Videos">
                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>React Youtube Video Example</div>
                        </div>
                        <div className="view">
                            60 475 vues - 16 mai 2015
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=1YlxJrSaqPw' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>4 AM Coding Session - Lofi Hip Hop Mix</div>
                        </div>
                        <div className="view">
                            692 692 vues - 13 avr. 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=l9AzO1FMgM8' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>Java in 100 Seconds</div>
                        </div>
                        <div className="view">
                            242 829 vues - 3 nov. 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=Tn6-PIqc4UM' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>React in 100 Seconds</div>
                        </div>
                        <div className="view">
                            502 235 vues - 8 sept. 2020
                        </div>
                    </div>
        
                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>React Youtube Video Example</div>
                        </div>
                        <div className="view">
                            60 475 vues - 16 mai 2015
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=1YlxJrSaqPw' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>4 AM Coding Session - Lofi Hip Hop Mix</div>
                        </div>
                        <div className="view">
                            692 692 vues - 13 avr. 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=l9AzO1FMgM8' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>Java in 100 Seconds</div>
                        </div>
                        <div className="view">
                            242 829 vues - 3 nov. 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=Tn6-PIqc4UM' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>React in 100 Seconds</div>
                        </div>
                        <div className="view">
                            502 235 vues - 8 sept. 2020
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>React Youtube Video Example</div>
                        </div>
                        <div className="view">
                            60 475 vues - 16 mai 2015
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=1YlxJrSaqPw' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>4 AM Coding Session - Lofi Hip Hop Mix</div>
                        </div>
                        <div className="view">
                            692 692 vues - 13 avr. 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=l9AzO1FMgM8' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>Java in 100 Seconds</div>
                        </div>
                        <div className="view">
                            242 829 vues - 3 nov. 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer url='https://www.youtube.com/watch?v=Tn6-PIqc4UM' height="160px" width="300px" controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/React.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                            <div>React in 100 Seconds</div>
                        </div>
                        <div className="view">
                            502 235 vues - 8 sept. 2020
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea