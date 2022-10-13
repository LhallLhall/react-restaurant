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
  if(data.length === 0) {
    return <div>WAIT A 🤬 SECOND</div>
  }
return (
  <>
      {page === 'Home' && <App data={data}/> }
      {page === 'Breakfast' && <Breakfast data={data} />}
      {page === 'Lunch' && <Lunch data={data}/>}
      {page === 'Dinner' && <Dinner data={data}/>}
      {page === 'Desserts' && <Desserts data={data}/>}
      {page === 'Appetizers & Sides' && <AppetizersSides data={data}/>}
      <button onClick={() => setPage('Home')}>Home</button>
      <button onClick={() => setPage('Breakfast')}>breakfast</button>
      <button onClick={() => setPage('Lunch')}>Lunch</button>
      <button onClick={() => setPage('Dinner')}>Dinner</button>
      <button onClick={() => setPage('Desserts')}>Desserts</button>
      <button onClick={() => setPage('Appetizers & Sides')}>Appetizers & Sides</button>
  </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <PageLoad />
  </div>
)
