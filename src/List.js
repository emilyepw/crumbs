import React from "react";

const List = ({ items }) => {
    return(
        <>
        {items.map((item) => {
            const { id, name, brand, expiration } = item;
            return (
                <article key={id} className='item'>
                    <div>
                     <h4>{name}</h4>
                     <p>{brand} - {expiration}</p>
                    </div>
                 </article>
            );
        })}
        </>
    )
}

export default List;