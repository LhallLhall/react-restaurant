function dinner (props) {
    console.log()
    let menu = (props.data.filter((item) => (item.category.title === 'Dinner')))
    console.log(menu)

    let menuItems = []

    for (let i = 0; i < 30; i++){
        menuItems.push(<>
            <div className = 'col-12 col-md-6 col-lg-4 p-4 justify-content-center'>
                <div className="card h-100"> 
                    <div className="card-body text-center">
                        <h3 className="card-title">{menu[i].title}</h3>
                        <h5 className="card-text mb-2">${menu[i].price}</h5>
                        <div className="card-text d-flex align-items-center justify-content-center flex-shrink-1" >{menu[i].description}</div>
                    </div>
                </div>
            </div>
    </> )
    }
    return (
        <div className='container '>
            <h1 className='text-center p-3 '>Dinner</h1>
            <div className="row text-center border2  bg-danger">
                {menuItems}
            </div>
            
        </div>
        )
}
export default dinner

