import React from 'react'
import './MainArea.css'
import { MdHome, MdVideoLibrary, MdHistory, MdWatchLater, MdPlaylistPlay, MdRssFeed } from 'react-icons/md'
import { FaFutbol, FaGripfire, FaNewspaper } from 'react-icons/fa'
import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { GiGamepad } from 'react-icons/gi'


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
                Main
            </div>
        </div>
    )
}

export default MainArea