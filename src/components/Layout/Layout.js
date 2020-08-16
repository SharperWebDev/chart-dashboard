import React from 'react';
import Filter from '../../containers/Filter/Filter';
import ChartsSection from '../../containers/ChartsSection/ChartsSection';
import QuickFilter from '../../components/QuickFilter/QuickFilter';

const Layout = (props) => {
  return (
    <div className="container">
      <Filter/>
      <main className="main-content-area">
        <QuickFilter />
        <section className="graph-grid">
          <ChartsSection/>
        </section>
      </main>
    </div>
  )
}

export default Layout