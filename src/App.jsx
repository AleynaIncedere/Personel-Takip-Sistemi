import { useState } from 'react'
import Header from './components/Header'
import './styles.css'

export default function App() {

  const [userInput, setUserInput] = useState('')  
  const [trackingReports, setTrackingReports] = useState([])

  const infractionMessage = '🚨🚨🚨 İHLAL TESPİT EDİLDİ! 🚨🚨🚨'

  function getTimeStamp() {
    const timeStamp = new Date()
    return (
      timeStamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }) +
      '.' +
      (timeStamp.getMilliseconds() / 1000).toFixed(3).slice(-3)
    )
  }

  
  function handleInputChange(event) {
    let input = event.target.value

    
    if (input.includes('Evil Corp.')) {
      input = input.replace('Evil Corp.', 'Good Corp.')
    }

    
    setUserInput(input)

  
    const newReport = {
      timeStamp: getTimeStamp(),
      employeeInput: input,
      infractionDetected: input.includes('Evil Corp.')
    }

   
    setTrackingReports((prevReports) => [...prevReports, newReport])

    
    if (newReport.infractionDetected) {
      console.log(infractionMessage)
    }
  }

  return (
    <div>
      <Header />
      <textarea 
        placeholder="Raporunuzu buraya yazın..." 
        value={userInput}  
        onChange={handleInputChange}  
      />
    </div>
  )
}
