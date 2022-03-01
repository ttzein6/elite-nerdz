import React from 'react'
import CollectionCard from './CollectionCard'
import './punkList.css'

const PunkList = ({punkListData, setSelectedPunk}) => {
    
  return (
      
      
      
    /*<div className='punkList'>
          {punkListData.map((punk) => (
             
              <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
                  <CollectionCard 
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_url}
                  />
              </div>
          ))}
      </div>*/
      <div className='punkList'>
          {punkListData.map((punk) => (
             
              <div key={punk.token_id}
               onClick={
                   function() {
                  const iid = 6 - punk.token_id -1;
                  return  setSelectedPunk(iid);
              }
              }
              >
                  <CollectionCard 
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_url}
                  />
              </div>
          ))}
      </div>

      
  )
}

export default PunkList