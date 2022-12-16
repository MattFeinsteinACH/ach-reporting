import styles from "./AppNav.module.css";
import { navData } from "./navData.js";
import Link from "next/link";
import {Button, Menu, MenuItem } from '@mui/material';
import { style } from "@mui/system";
import { useState, useEffect, useRef, SetStateAction } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "next/router";

export default function AppNav(props:any){ 
    const router = useRouter();

    // const [active, setActive] = useState<string>();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenuId, setOpenMenuId] = useState<null | String>("");
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpenMenuId(event.currentTarget.id);
      
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenuId(null);
    }
    
    useEffect(()  =>  {
        console.log(props.activeItem)
    })

    return(
        <>
         <ul id="menu-topLvl" className={styles.Menu}>
            <li><Button className={styles.homeBtn}><HomeIcon className={styles.homeIcon}/><Link className={styles.homeLink} style={{paddingLeft: "0px"}} href="/">Home</Link></Button></li>
            {navData.map((navItem, index) => {
                return <li key={index}>
                    <div className={styles.navBtnHldr}>
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
                        <span style={{ display: props.activeItem === navItem.navHeading ? 'flex' : 'none' }} className={styles.activeIndicator}>&nbsp;</span>
                    </div>
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