import React, {useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import wethImage from '../assets/eth.png'


const Main = ({selectedPunk , punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    useEffect(() => {
     setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img className='selectedPunk'  src={activePunk.image_url}  alt=''/>
                </div>
            </div>
            <div className='punkDetails' >
                <div className='title' style={{color: '#fff'}}>{activePunk.name}</div>
                <span className='itemNumber'>.#{activePunk.token_id}</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src={wethImage} alt='' />
                </div>
                <div className='imgPrice'>{activePunk.traits[0].value}</div>
                <div className='ownerImageContainer'>
                    <img
                     src={activePunk.owner.profile_img_url} 
                     alt=''
                    />
                </div>
                <div className='ownerDetails'>
                     <div className='ownerNameAndHandle'>
                        <div className='ownerAddress'>
                            {activePunk.owner.address}
                        </div>
                        <div className='ownerHandle'>
                            @tamerlzein
                        </div>
                     </div>
                     <div className='ownerLink'>
                        <img src={instagramLogo}  alt='' />
                     </div>
                     <div className='ownerLink'>
                        <img src={twitterLogo}  alt='' />
                     </div>
                     <div className='ownerLink'>
                        <img src={moreIcon}  alt='' />
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main