import React from 'react'

const Footer = () => {
    return (
        <div className='p-6 flex bg-[#724324] text-white justify-between items-center'>
            <div>
                <a className='text-xs lg:text-medium cursor-pointer' href="mailto:wsiwarriors@gmail.com">Contact Us</a>
            </div>
            <span className='text-xs lg:text-medium'>No Fly Zone • All Rights Reserved {new Date().getFullYear()}</span>
        </div>
    )
}

export default Footer
