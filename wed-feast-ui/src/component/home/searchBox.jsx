import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import segments from '../segments.json';
import Button from 'react-bootstrap/Button'
const cities = [
    { id: 1, name: 'Pune' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Nashik' }
]

const SearchBox = () => {

return (
    <div className="search-box">

<Autocomplete
		options={cities}
		style={{ width: 150,
				 padding:"5px 10px 0px 10px",
				 backgroundColor:"#EDF4FF"  }}
		renderInput={(params) =>
		<TextField {...params} label="City"/>}
        getOptionLabel={option => option.name}
	/>
	<Autocomplete
		options={segments.segments}
		 style={{ width:250,padding:"5px 10px"  }}
		renderInput={(params) =>
		<TextField {...params} label="Select Services"/>}
        getOptionLabel={option => option.name}
	/>
  <Button variant="primary" size="lg">
<i class="fa fa-search" aria-hidden="true"></i>
</Button>

    </div>

);
}

export default SearchBox
