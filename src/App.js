import { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.css'
import Loading from './components/Loading'

function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () =>{
      setLoading(true)
      const res = await fetch('api-link')
      const {events} = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  },[])

  return (
    <>
        {!loading ? <Map eventData={eventData} /> : <Loading /> }
    </>
  )
}

export default App;
