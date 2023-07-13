import React from "react";

const List = ({ items }) => {
    return(
        <>
        {items.map((item) => {
            const { id, name, brand } = item;
            return (
                <article key={id} className='item'>
                    <div>
                     <h4>{name}</h4>
                     <p>{brand}</p>
                    </div>
                 </article>
            );
        })}
        </>
    )
}

export default List;