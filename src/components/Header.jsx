import React from "react";
import logo from "../images/Logo.webp";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="py-5 bg-black">
        <div className="container-fluid flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img width={140} src={logo} alt="Logo" />
            <div>
              select
            </div>
          </div>

          <div className="flex items-center">
            <ul className="flex gap-8 me-6">
              <li><Link to="/">Shops</Link></li>
              <li><Link to="/">Offers</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li className="cursor-pointer" onClick={handleClick}>Pages</li>
            </ul>

            <div className="flex items-center gap-4">
              <IconButton variant="outlined" aria-label="delete">
                <SearchIcon />
              </IconButton>
              <Button variant="contained">Join</Button>
              <Button variant="contained">Become Seller</Button>
            </div>
          </div>
        </div>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </header>
    </>
  );
};

export default Header;
