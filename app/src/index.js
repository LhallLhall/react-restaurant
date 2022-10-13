import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';
import Breakfast from './breakfast'
import Lunch from './lunch'
import Dinner from './dinner'
import Desserts from './desserts'
import AppetizersSides from './appetizers-sides'

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
      <div className='d-flex justify-content-center align-items-center h-100vh' style={{height: '100vh'}}>
      <h1>WAIT A 🤬 SECOND</h1>
      </div>
        )
  }
return (
  <>
    <div className='container'>
      <div className=" d-flex row">
        <h1 className='text-center text-color-alert'>The Garden of Eat'n</h1>
      </div>
      <div className="row  bg-secondary justify-content-center d-flex align-items-center">
        <div className='col-6 col-md-2 col-lg-2  d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg ' style={{minWidth: '130px'}} onClick={() => setPage('Home')}>Home</button>
        </div>
        <div className='col-6 col-md-2 d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Breakfast')}>Breakfast</button>
        </div>
        <div className='col-6 col-md-2 d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Lunch')}>Lunch</button>
        </div>
        <div className='col-6 col-md-2 d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Dinner')}>Dinner</button>
        </div>
        <div className='col-6 col-md-2 d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Desserts')}>Desserts</button>
        </div>
        <div className='col-6 col-md-2 d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Appetizer')}>Appetizers</button>
        </div>
      </div>
      {page === 'Home' && <App data={data}/> }
      {page === 'Breakfast' && <Breakfast data={data} page={page} />}
      {page === 'Lunch' && <Lunch data={data}/>}
      {page === 'Dinner' && <Dinner data={data}/>}
      {page === 'Desserts' && <Desserts data={data}/>}
      {page === 'Appetizer' && <AppetizersSides data={data}/>}
    </div>
      <h5>Hours of Operation are 8:00AM to 9:00PM</h5>
      <p>348 E Main St, Lexington, KY</p>
  </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-secondary' >
  <PageLoad />
  </div>
)
