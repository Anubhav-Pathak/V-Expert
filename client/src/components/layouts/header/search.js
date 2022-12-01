import React from 'react'

const Search = (props) => {
    return (
        <form action="#" className={`${props.show ? "hidden":""} rounded-sm absolute top-[40px] lg:top-[70px] right-0`}>
            <input type="search" name="" placeholder="Search..." className='py-2 px-4 border-2 border-black outline-none'/>
        </form>
    )
}

export default Search;