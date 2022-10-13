function appSides (props) {
    // console.log(props.data[1].title)
    let menu = (props.data.filter((item) => (item.category.title === 'Appetizers')))
    let menu2 = (props.data.filter((item) => (item.category.title === 'Side')))

    console.log(menu)
    let menuItems = []
    let menuItems2 = []
    for (let i = 0; i < menu.length; i++){
        menuItems.push(<>
        <div className = 'col-4 pt-2 justify-content-center'>
                <div className="card h-100"> 
                    <div className="card-body text-center">
                        <h3 className="card-title">{menu[i].title}</h3>
                        <h5 className="card-text">${menu[i].price}</h5>
                        <div className="card-text">{menu[i].description}</div>
                    </div>
                </div>
            </div>
        </>)
    }
    for (let i = 0; i < menu2.length; i++){
        menuItems2.push(<>
            <div className = 'col-4 pt-2 justify-content-center'>
                <div className="card h-100"> 
                    <div className="card-body text-center">
                        <h3 className="card-title">{menu2[i].title}</h3>
                        <h5 className="card-text">${menu2[i].price}</h5>
                        <div className="card-text">{menu2[i].description}</div>
                    </div>
                </div>
            </div>
        </>)
    }
    return (
        <div className='container'>
            <div className="row text-center">
                {menuItems}
            </div>
            <div className="row text-center">
                {menuItems2}
            </div>
        </div>
        )
}
export default appSides