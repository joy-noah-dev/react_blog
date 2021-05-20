import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Search from 'modules/commons/Search'
import Card from 'modules/commons/Card'
import { getAllCardsRequested } from 'modules/lorDeck/actions'
import { FixedSizeGrid as Grid } from "react-window";

const LorSearch = () => {
  const cards = useSelector(state => state.lorDeck.cards)
  const dispatch = useDispatch()
  const [results, setResults] = useState([
    []
  ]);

  useEffect(() => {
    dispatch(getAllCardsRequested())
  }, [])

  const Cell = ({ columnIndex, rowIndex, style }) => {
    return (
      <div style={style}>
        {results[rowIndex] && results[rowIndex][columnIndex] && (<Card
          cardData={results[rowIndex][columnIndex]}
          width={200}
        />)}
      </div>
  )};

  const handleSearchChange = (e, data) => {
    const isMatch = (item) => {
      const re = new RegExp(data.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      const test = re.test(item.name) || re.test(item.descriptionRaw) || re.test(item.supertype) || re.test(item.region) || re.test(item.spellSpeed) || re.test(item.subtype)
      return test && data.value !== ''
    }
    let results = []
    let simple_results = cards.filter(isMatch)
    let chunkSize = 5
    for (let i = 0; i < simple_results.length; i += chunkSize) {
        const chunk = simple_results.slice(i, i + chunkSize);
        results.push(chunk);
    }
    setResults(results)
  }

  return (
    <section>
      <Search
        handleSearchChange={handleSearchChange}
      />
      <Grid
        className="Grid"
        columnCount={4}
        columnWidth={220}
        width={900}
        height={900}
        rowCount={5}
        rowHeight={300}
      >
        {Cell}
      </Grid>
    </section>
  )
}

export default LorSearch;
