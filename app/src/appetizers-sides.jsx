function appSides (props) {
    // console.log(props.data[1].title)
    let menu = (props.data.filter((item) => (item.category.title === 'Appetizer')))
    let menu2 = (props.data.filter((item) => (item.category.title === 'Side')))

    console.log(menu)
    let menuItems = []
    let menuItems2 = []
    for (let i = 0; i < 12; i++){
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
        </>)
    }
    for (let i = 0; i < menu2.length; i++){
        menuItems2.push(<>
            <div className = 'col-12 col-md-6 col-lg-4 p-4 justify-content-center'>
                <div className="card h-100"> 
                    <div className="card-body text-center">
                        <h3 className="card-title">{menu2[i].title}</h3>
                        <h5 className="card-text mb-2">${menu2[i].price}</h5>
                        <div className="card-text d-flex align-items-center justify-content-center flex-shrink-1" >{menu2[i].description}</div>
                    </div>
                </div>
            </div>
        </>)
    }
    return (
        <div className='container'>
            <h1 className='text-center p-3 '>Appetizers</h1>
            <div className="row text-center border border-dark border-3 bg-danger">
                {menuItems}
            </div>
            <h1 className='text-center p-3 '> Sides</h1>
            <div className="row text-center border border-dark border-3 bg-danger">
                {menuItems2}
            </div>
        </div>
        )
}
export default appSides