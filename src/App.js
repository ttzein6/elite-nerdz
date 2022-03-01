import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/header';
import {useState, useEffect} from 'react'
import axios from 'axios'
import PunkList from './components/punkList';
import Main from './components/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts  = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x5178DF1E4274875dD2062CF3E0eEfAF84d8A95a1&order_direction=desc'
        )
      console.log(openseaData.data.assets )
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  
  //const array = punkListData.reverse()
  //console.log('reversed' , array)
  return (
  <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )}
      
  </div>
  )
}

export default App;
