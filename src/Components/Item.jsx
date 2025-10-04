// Raja Ram Hemsworth => Item React(XML) Code
function Item({itemName,itemDate}){
    return (
        <div className="container kg-row">
            <div className="row">
                <div className="col-6">{itemName}</div>
                <div className="col-4">{itemDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default Item;