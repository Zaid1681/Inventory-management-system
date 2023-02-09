import React from 'react'
import "./MenuLinks.css"
import SpeedIcon from '@mui/icons-material/Speed';
import { Link } from 'react-router-dom'


const MenuLinks = () => {
    return (
        <div className='menuLinksContainer'>
            <div>
                <Link to="/" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Dashboard</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Request</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Inward Maeterial</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Dispatch</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Dispatch History </p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Low Stock Alert</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>PO History</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Track Asert</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Track User Asset</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Track OPEX Stock</p>
                </Link>
            </div>
            <div>
                <Link to="/page2" className='linkItem'>
                    <SpeedIcon style={{ "color": "black" }} />
                    <p className='linkHeader'>Track CAPEX Stock</p>
                </Link>
            </div>


           
        </div>
    )
}

export default MenuLinks
