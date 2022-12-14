import MenuItem from './getMenuItem'
import Footer from "./footer"
import Home from './home'

export default function port (props){
    if(props.page !== 'Home'){
      return(
        <>
        <div className="row pt-3 text-center border2 classs">
          <MenuItem data={props.data} page={props.page}/>
        </div>
        <div>
        <Footer />
        </div>
        </>
      )
    }else {
      return(
        <>
        <Home/>
        </>
      )
    }
  }