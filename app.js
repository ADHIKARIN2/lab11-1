import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Axios from 'axios'

function App() {
  const[joke,setjoke] = useState("");
  const getjoke=()=> 
  {
    Axios.get("https://official-joke-api.appspot.com/randomjoke").then {
    (response)=> {
      console.log(response);
      setjoke{response.data.setup + "..." + response.data.punchline);
      
  }}
  return (
    <>
      <Navbar />
      <div>
    Hello <button onclick={getjoke}> Get Joke </button>
    {joke}
        <Container />
      </div>
    </>
  );
}

export default App;
