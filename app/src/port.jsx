import MenuItem from './getMenuItem'

export default function test (props){
    if(props.page !== 'Home'){
      return(
        <div className="row pt-3 text-center border2 bg-danger">
          <MenuItem data={props.data} page={props.page}/>
        </div>
      )
    }
  }