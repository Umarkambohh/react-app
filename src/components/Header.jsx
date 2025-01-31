import React, { useState } from "react";
import logo from "../images/Logo.webp";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <>
      <header className="py-5">
        <div className="container-fluid flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img width={140} src={logo} alt="Logo" />
            <div>
              <h1 sx={{ color: 'primary.main' }}>select</h1>
            </div>
          </div>

          <div className="flex items-center">
            <ul className="flex gap-8 me-6">
              <li className="hover:text-emerald transition cursor-pointer"><Link to="/">Shops</Link></li>
              <li className="hover:text-emerald transition cursor-pointer"><Link to="/">Offers</Link></li>
              <li className="hover:text-emerald transition cursor-pointer"><Link to="/">Contact</Link></li>
              <li className="hover:text-emerald transition cursor-pointer" onClick={handleClick}>Pages <KeyboardArrowDownIcon /></li>
            </ul>

            <div className="flex items-center gap-4">
              <IconButton variant="outlined" aria-label="delete">
                <SearchIcon />
              </IconButton>
              <Button sx={{ textTransform: 'capitalize' }} variant="contained">Join</Button>
              <Button sx={{ textTransform: 'capitalize' }} variant="contained">Become Seller</Button>
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
