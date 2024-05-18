import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { useState } from 'react'

const TableHeader = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
                aria-label="delete"
                size="large"
                ria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <DownloadIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleClose}>CSV Export</MenuItem>
                <MenuItem onClick={handleClose}>PDF Export</MenuItem>
            </Menu>
        </Box>
    )
}

export default TableHeader
