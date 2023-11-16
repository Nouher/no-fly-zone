import React from 'react'

const Footer = () => {
    return (
        <div className='p-6 flex bg-[#724324] text-white justify-between items-center'>
            <div>
                <a className='text-xs cursor-pointer' href="mailto:wsiwarriors@gmail.com">Contact Us</a>
            </div>
            <div className='text-xs'>No Fly Zone • All Rights Reserved {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer
