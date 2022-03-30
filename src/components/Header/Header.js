import React from 'react'; 
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex md:justify-between justify-center'>
            <div className="hidden md:block">
                <CustomLink to='/' className='font-sans font-bold text-xl text-grey-600'>
                    Crypto cafe
                </CustomLink>
            </div>
            <div className="gap-4 flex text-xl">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink> 
            </div>
        </div>
    );
};

export default Header;