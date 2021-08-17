import logo from './logo.svg';
import './App.css';
import { data } from './Data'
import Vote from './Vote';


function App() {

  return (
    <>
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