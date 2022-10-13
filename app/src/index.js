import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
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
      <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
      <h1>WAIT A 🤬 SECOND</h1>
      </div>
        )
  }
return (
  <>
    <div className='container'>
      <div className="row border-bottom border-dark mb-2">
        <div className='col-4 col-lg-1'>
        <img className='p-1' src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eDqBZPmB7OwXs1M3EMoAJtliYogPtt8Pk9" style={{width: "100px"}}/>
        </div>
        <div className='col-4 col-lg-10 d-flex justify-content-center'>

        <h1 className='text-alert m-0 '>The Garden of Eat'n</h1>
        </div>
      </div>
      <div className="row  justify-content-center d-flex align-items-center">

        <div className='col-6 col-md-2 col-lg-2 p-1 d-flex justify-content-center'>
          <button className='btn btn-dark btn-lg ' style={{minWidth: '130px'}} onClick={() => setPage('Home')}>Home</button>
        </div>
        <div className='col-6 col-md-2 d-flex p-1 justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Breakfast')}>Breakfast</button>
        </div>
        <div className='col-6 col-md-2 d-flex p-1 justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Lunch')}>Lunch</button>
        </div>
        <div className='col-6 col-md-2 d-flex p-1 justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Dinner')}>Dinner</button>
        </div>
        <div className='col-6 col-md-2 d-flex p-1 justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Desserts')}>Desserts</button>
        </div>
        <div className='col-6 col-md-2 d-flex p-1 justify-content-center'>
          <button className='btn btn-dark btn-lg 'style={{minWidth: '130px'}} onClick={() => setPage('Appetizer')}>Appetizers</button>
        </div>

      </div>
      {page === 'Home' && <App data={data}/> }
      {page === 'Breakfast' && <Breakfast data={data} page={page} />}
      {page === 'Lunch' && <Lunch data={data}/>}
      {page === 'Dinner' && <Dinner data={data}/>}
      {page === 'Desserts' && <Desserts data={data}/>}
      {page === 'Appetizer' && <AppetizersSides data={data}/>}
      <div className='row mt-5 border border-dark border-3'>
        <div className='col-12 col-sm-12 col-md-6'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus" className='pt-3 fluid' width='100%' height='300px'  style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-12 col-sm-12 col-md-6'>
          <h2 className='text-center text-md-end text-lg-end text-decoration-underline'>Hours of Operation:</h2>
          <p className=' text-center text-md-end text-lg-end'>Sunday: 10:00AM to 5:00PM</p>
          <p className='text-center text-md-end text-lg-end'>Monday: 8:00AM to 9:00PM</p>
          <p className='text-center text-md-end text-lg-end'>Tuesday: 8:00AM to 9:00PM</p>
          <p className='text-center text-md-end text-lg-end'>Wednesday: 8:00AM to 9:00PM</p>
          <p className='text-center text-md-end text-lg-end'>Thursday: 8:00AM to 9:00PM</p>
          <p className='text-center text-md-end text-lg-end'>Friday: 8:00AM to 11:00PM</p>
          <p className='text-center text-md-end text-lg-end'>Saturday: 8:00AM to 11:00PM</p>

        </div>
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
