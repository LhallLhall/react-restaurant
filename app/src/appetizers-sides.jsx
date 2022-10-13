function appSides (props) {
    // console.log(props.data[1].title)
    let menu = (props.data.filter((item) => (item.category.title === 'Appetizers')))
    let menu2 = (props.data.filter((item) => (item.category.title === 'Side')))

    console.log(menu)
    let menuItems = []
    let menuItems2 = []
    for (let i = 0; i < menu.length; i++){
        menuItems.push(<>
        <h3>{menu[i].title}</h3>
        <p>{menu[i].description}</p>
        <h5>{menu[i].price}</h5> 
        </>)
    }
    for (let i = 0; i < menu2.length; i++){
        menuItems2.push(<>
        <h3>{menu2[i].title}</h3>
        <p>{menu2[i].description}</p>
        <h5>{menu2[i].price}</h5> 
        </>)
    }
    return(
        <div>
            <div>{menuItems}</div>
            <div>{menuItems2}</div>
        </div>
    )
}
export default appSides