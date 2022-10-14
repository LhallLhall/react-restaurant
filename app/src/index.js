import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';
import App from './app';
// import Breakfast from './breakfast';
// import Lunch from './lunch';
// import Dinner from './dinner';
// import Desserts from './desserts';
// import AppetizersSides from './appetizers-sides';
import Navbar from './navbar';
// import MenuItem from './getMenuItem'
import Header from './header'
import Footer from './footer'
import Port from './port'

function PageLoad (){
  const [data, setData] = useState([])
  const [page, setPage ] = useState('Home')

  useEffect(() => {
    Axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
        .then((resp) => setData(resp.data));
  }, [])

  // stops the code from running until the api has been called and state has received it's data
  if(data.length === 0) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
      <h1>WAIT A 🤬 SECOND</h1>
      </div>
        )
  }
  
  const menu = ['Home', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Appetizer']

  

  function handleClick(text) {
    setPage(text);
  }

return (
  <>
  <div className='container'>
    <Header />
    <div className="row justify-content-center d-flex align-items-center">
      {menu.map((menuItem) => (
        <Navbar text={menuItem} handleClick={handleClick} />
      ))}
    </div>
    <div className='container-fluid'>
      <Port data={data} page={page}/>
    </div>
    
    </div>
      
  </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div  >
  <PageLoad />
  </div>
)
