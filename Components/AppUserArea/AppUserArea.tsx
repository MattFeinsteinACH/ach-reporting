import { IconButton, Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import styles from "./AppUserArea.module.css";
import Link from "next/link";

export default function AppUserArea(props:any): JSX.Element{
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
    };
      
    function stringAvatar(name: string) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    };

    return(
        <>
            <div className={styles.userAreaBtnHldr}>
                <IconButton 
                    className={styles.userAreaBtn}
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar {...stringAvatar('Matt Feinstein')} sx={{ width: 33, height: 33 }} />
                    <KeyboardArrowDownIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                >
                    <MenuItem>
                      <Link
                        href="/Home/UserAccount"
                        className={styles.lnk}
                      >Profile</Link>
                    </MenuItem>
                    <MenuItem>Sign Out</MenuItem>
                </Menu>
            </div>
        </>
    )
}