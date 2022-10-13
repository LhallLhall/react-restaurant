function dinner (props) {
    console.log()
    let menu = (props.data.filter((item) => (item.category.title === 'Dinner')))
    console.log(menu)

    let menuItems = []

    for (let i = 0; i < 10; i++){
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
    </> )
    }
    return (
        <div className='container'>
            <div className="row text-center">
                {menuItems}
            </div>
        </div>
        )
}
export default dinner

