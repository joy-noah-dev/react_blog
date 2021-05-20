import React from 'react'
import { Search, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const CustomSearch = ({
  handleSearchChange
}) => {
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          showNoResults={false}
          onSearchChange={handleSearchChange}
        />
      </Grid.Column>
    </Grid>
  )
}

export default CustomSearch;
