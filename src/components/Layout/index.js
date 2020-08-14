import React from 'react';
import Filter from '../../containers/Filter';
import ChartsSection from '../../containers/ChartsSection';
import QuickFilter from '../../components/QuickFilter';

const Layout = (props) => {
  return (
    <div className="container">
      <Filter/>
      <main className="main-content-area">
        <aside className="quick-filter-bar">
            <QuickFilter />
        </aside>
        <section className="graph-grid">
          <ChartsSection/>
        </section>
      </main>
    </div>
  )
}

export default Layout