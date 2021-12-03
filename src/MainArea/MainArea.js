import React from 'react'
import './MainArea.css'
import { MdHome, MdVideoLibrary, MdHistory, MdWatchLater, MdPlaylistPlay, MdRssFeed } from 'react-icons/md'
import { FaFutbol, FaGripfire, FaNewspaper } from 'react-icons/fa'
import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { GiGamepad } from 'react-icons/gi'
import Video from './Videos/Video'

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

                    <Video 
                    lien='https://www.youtube.com/watch?v=c_R7dO71cV4'
                    pic="/images/React1.png"
                    titre='Dopamine' 
                    vues='60 475 vues - 16 mai 2015'/>

                    <Video 
                    lien='https://www.youtube.com/watch?v=QilOo9OJ59k'
                    pic="/images/React2.png"
                    titre='Referencement Naturel' 
                    vues='1 - 3 déc. 2021'/>

                    <Video 
                    lien='https://www.youtube.com/watch?v=mFYvhvCqbyE'
                    pic="/images/React3.png"
                    titre='Systeme Décisionnel Python' 
                    vues='1 - 3 déc. 2021'/>

                    <Video 
                    lien='https://www.youtube.com/watch?v=zOOreXRv52w'
                    pic='/images/React4.pn'
                    titre='Payement Enligne' 
                    vues='60 475 vues - 16 mai 2015'/>

                    <Video
                    lien='https://www.youtube.com/watch?v=S-VeYcOCFZw'
                    pic='/images/x.jpg'
                    titre='How To Create Advanced CSS Dropdown Menus'
                    vues='197 068 vues18 sept. 2021'/>

                    <Video 
                    lien='https://www.youtube.com/watch?v=Sxxw3qtb3_g'
                    pic='/images/React4.pn'
                    titre='How to OVER Engineer a Website // What is a Tech Stack?' 
                    vues='531 404 vues - 24 sept. 2021'/>

                    <Video
                    lien='https://www.youtube.com/watch?v=goy4lZfDtCE'
                    pic='/images/x.jpg'
                    titre='Reacting to Controversial Opinions of Software Engineers'
                    vues='482 967 vues17 août 2021'/>         

                    <Video
                    lien='https://www.youtube.com/watch?v=ShcR4Zfc6Dw'
                    pic='/images/x.jpg'
                    titre='Why so many distros? The Weird History of Linux'
                    vues='504 570 vues22 mars 2021'/>               
                </div>
            </div>
        </div>
    )
}

export default MainArea