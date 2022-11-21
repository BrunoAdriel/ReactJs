import React from "react";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="container">
            <div className="col-md-12">
                <div class="alert alert-dark text-center" role="alert">
                    {greeting}
                </div>
            </div>

        </div>
    )
}


export default ItemListContainer;