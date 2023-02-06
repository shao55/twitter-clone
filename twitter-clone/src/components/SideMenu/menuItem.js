export default function MenuItem( {item} ) {
    return (
        <div style={{display: 'flex', alignItems: 'center', margin: '50px 5px'}}>
            <div style={{width: 40, height: 40}}>
                {item.icon}
            </div>
            <p style={{fontSize: 18, margin: "0px 15px", }} >{item.name}</p>
        </div>
    )
}