import React from 'react'

const Dropdown = (props) => {
  return (
    <div className="dropdown py-2 px-4 mr-4 inline-block relative">
        <a className="dropdown" href={`/${props.name.toLowerCase()}`}>{props.name}&nbsp;<i className="fa-sharp fa-solid fa-caret-down"></i></a>
            <div className="dropdown-menu absolute min-w-[130px] hidden flex-col top-10 bg-white">
                {
                    props.links.map((link)=>{
                        return (
                            <a href={`/${props.name.toLowerCase()}/${link.toLowerCase().replace(/ /g , "-")}`} className="py-1 hover:bg-neutral-300 pl-2">{link}</a>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Dropdown