import Greet from '../components/Greet'
import Welcome from '../components/Welcome'
import Message from '../components/Message'
import './App.css'
import Count from '../components/Count'
import List from '../components/List'
import Calc from '../components/Calc'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greet name="Yusufia" cityName="Bichi"/>
      <Greet name="Isah" cityName="Bagwai"/>
      <Welcome name="Yusufia" cityName="Bichi"/>
      <Welcome name="Isah" cityName="Bagwai">
        <p>This is a children props</p>
      </Welcome> */}
      {/* <Message/> */}
      < Count />
      {/* < List /> */}
      {/* <Calc/> */}
    </>
  )
}

export default App
