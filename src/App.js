import logo from './logo.svg';
import './App.css';
import { data } from './Data'
import Vote from './Vote';


function App() {

  return (
    <>
     <h3>Price Tag</h3>
      <div className="main-data">
        {
          data.map(obj => {
            return <Vote newdata={obj} />
          })
        }
      </div>
    </>
  )
}

export default App;