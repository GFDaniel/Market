import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, Modal } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState, VoidFunctionComponent } from 'react';
import { IMarketNavBar } from '../../types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 'auto',
  marginRight: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#8d8c8c',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const NavBar: VoidFunctionComponent<IMarketNavBar> = ({ sellers, sort, filterItemCompany, filterItemSeller, clearFilter }) => {
    const [open, setOpen] = useState<any>(false);
    const [searchTerm, setSearchTerm] = useState<any>("");
    const [filterItems, setFilterItems] = useState<any>([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeSearchBox = (event:any)=> {
        setSearchTerm(event.target.value);
        filterItemCompany(event.target.value);
    };

    const handleOnChangeSeller = (event:any)=> {
        setFilterItems([...filterItems, event.target.name]) 
    };

    const filter = () => {
        filterItemSeller(filterItems)
        setFilterItems([])
        handleClose()
    }

    
    const onClickClearFilter = () => {
        clearFilter()
        setFilterItems([])
        handleClose()   
    }
    
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar sx={{ background:"#f7f8fa", display:"flex", justifyContent:"flex-end"}}>
                <Search sx={{ background:"#f1f1f1", }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                        value={searchTerm} onChange={handleChangeSearchBox}
                    />
                </Search>
                <Button onClick={handleOpen}><FilterAltIcon sx={{ color:"#8d8c8c", }}/></Button>
            </Toolbar>
        </AppBar>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{marginBottom:5}}> 
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sort
                        </Typography>
                        <div className="topping">
                            <input type="checkbox" id="1" name="Sort A-Z" value="1"/>
                            Sort A-Z
                        </div>
                        <div className="topping">
                            <input type="checkbox" id="2" name="Sort Z-A" value="2"/>
                            Sort Z-A
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{marginBottom:5}}> 
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Seller
                        </Typography>
                        {sellers?.map((item:any, i:any) => {
                            return (<div key={i} className="topping">
                                <input type="checkbox" id={item.id} name={item.name}
                                    value={item.id} onChange={handleOnChangeSeller}
                                />
                                {item.name}
                            </div>)
                        })}
                    </Grid>
                </Grid>
                <Box sx= {{display:"flex", justifyContent:"flex-end"}}>
                    <Button sx= {{marginRight:5}} color="warning" onClick={onClickClearFilter}>Clear Filters</Button>
                    <Button variant="outlined" onClick={filter}>Filter</Button>
                </Box>
            </Box>
        </Modal>
        </Box>
    );
}

export default NavBar;