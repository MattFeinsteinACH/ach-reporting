import styles from "./AppNav.module.css";
import { navData } from "./navData.js";
import Link from "next/link";
import {Button, Menu, MenuItem } from '@mui/material';
import { style } from "@mui/system";
import { useState, useEffect, useRef, SetStateAction } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';

export default function AppNav(props:any){
    const [isActive, setIsActive] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenuId, setOpenMenuId] = useState<null | String>("");
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpenMenuId(event.currentTarget.id);
      setIsActive(currentTarget => !currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenuId(null);
    }

    // let activeLink = styles.activeLink;

    return(
        <>
         <ul id="menu-topLvl" className={styles.Menu}>
            <li><Button className={styles.homeBtn}><HomeIcon className={styles.homeIcon}/><Link className={styles.homeLink} style={{paddingLeft: "0px"}} href="/">Home</Link></Button></li>
            {navData.map((navItem, index) => {
                return <li key={index}>
                    <Button
                        id={navItem.navHeading + "_btn"}
                        key={navItem.id}
                        aria-controls={open ? navItem.navHeading + "_btn" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        {navItem.navHeading}
                    </Button>
                    {/* <span style={{display:openMenuId === navItem.navHeading + "_btn" ? 'flex':'none'}} className={styles.activeIndicator}>&nbsp;</span> */}
                    <Menu
                        id={navItem.navHeading}
                        anchorEl={anchorEl}
                        open={openMenuId === navItem.navHeading + "_btn"}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': navItem.navHeading + "_btn",
                        }}
                    >
                        {navItem.lvlTwo.map((subNav, index) =>
                            <MenuItem
                                key={index}
                                onClick={handleClose}
                                className={styles.subNavLink}
                            >
                                <Link className={styles.subNavLink} href={subNav.link}>
                                    {subNav.subNavHeading}
                                </Link>
                            </MenuItem>
                        )}
                    </Menu>
                </li>
            })}
        </ul> 
        </>
    )
}