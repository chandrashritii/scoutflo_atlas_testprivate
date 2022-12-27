import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Stack, TextField, Autocomplete } from "@mui/material";
import InputAdornment from '@material-ui/core/InputAdornment';

const manualOptions = [
    { title: 'abc' },
    { title: 'def' },
    { title: 'dhe' },
]; // Search Bar -  Will be replaced by api index


function SearchBar() {
    return (
            <Stack spacing={1} sx={{ p: 0 }}>
                <Autocomplete
                    freeSolo
                    id="search-bar"
                    disableClearable
                    options={manualOptions.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            margin="none"
                            placeholder="Search input"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (<InputAdornment position="start"> <SearchIcon /> </InputAdornment>),
                                type: 'search',
                                style: {
                                    padding: "calc(0.5vw)",
                                    fontSize: "calc(0.5vw + 8px)",
                                }
                            }}
                        />
                    )}
                    sx={{
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "none"
                        }, backgroundColor: "#F7F7F7"
                    }}
                />
                </Stack>
    );
}

export default SearchBar;