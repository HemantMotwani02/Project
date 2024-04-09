import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
function Header() {


    function menu() {
        const profile = document.getElementsByClassName('profile');
        profile.style.display = 'none';
    }
    return (
        <>
            <div style={{ display: 'flex', border: '1px solid #F0F0F0', padding: '10px 25px', width: '80vw', justifyContent: "space-between", alignItems: 'center', borderRadius: '0.6em', margin:'10px 0' }}>
                <div style={{ position: 'relative' }}>
                    <SearchIcon style={{ position: 'absolute', top: '5px', left: '10px' }} />
                    <input type="search" placeholder='Search Projects...' style={{ padding: '0 0 0 40px', border: '1px solid grey', borderRadius: '0.5em', height: '35px', backgroundColor: '#ECECEC', color: 'black' }} />

                </div>

                <div style={{ cursor: 'pointer' }}>
                    <img src='../../../public/profile.png' alt='profile' style={{ height: '45px' }} className='profile' onClick={menu} />
                    <KeyboardArrowDownIcon />
                </div>
            </div>
        </>
    )
};

export default Header;