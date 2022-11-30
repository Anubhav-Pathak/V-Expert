import React from 'react'

const Search = (props) => {
    return (
        <form action="#" className={`${props.show ? "hidden":""} rounded-sm absolute top-[40px] lg:top-[60px] right-[50px] lg:right-[250px] `}>
            <input type="search" name="" placeholder="Search..." className='py-2 px-4 border-2 border-black outline-none'/>
        </form>
    )
}

export default Search;