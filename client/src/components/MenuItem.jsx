import '../App.css';


// function Title(props){
//     return <h3>{ props.name }</h3>
// }


function MenuItem(props) {
  return (
    <div className="MenuItem">
        <div className='flex p-4 flex justify-between'>
            <div>
                <h3 className="font-bold p-2 text-2xl">{ props.name }</h3>
                <p className="p-2" >{ props.description }</p>
            </div>
            <div>
                <p className="p-2">{ props.price }</p>
            </div>
        </div>
    </div>
  );
}

export default MenuItem;
