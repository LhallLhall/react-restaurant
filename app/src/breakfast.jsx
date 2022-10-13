function breakfast (props) {
    console.log()
    let menu = (props.data.filter((item) => (item.category.title === 'Breakfast')))
    console.log(menu)
    let menuItems = []
    for (let i = 0; i < menu.length; i++){
        menuItems.push(<>
        <h3>{menu[i].title}</h3>
        <p>{menu[i].description}</p>
        <h5>{menu[i].price}</h5> 
        </>)
    }
    return <div>{menuItems}</div>
}
export default breakfast