import './App.css';
import { ColoredCardsList } from './Coloredcards';
import { OverviewChart } from './OverviewChart';
import { ProjectsList } from './Projects';
import { MenuBar } from './MenuBar';
import { StatusCardsList } from './StatusCards';
import { Illustrations } from './Illustrations';
import { DevelopmentApproach } from './DevelopmentApproach';
import { SearchBar } from './SearchBar';
import { Title } from './Title';

function App() {
  return (
    <div className="App">
      <div className='main1'>
        <MenuBar />
      </div>
      <div className='main2'>
        <SearchBar />
      </div>
      <div className='main3'>
        <Title />
        <StatusCardsList />
        <OverviewChart />
        
        <div className='main4'>
          <ProjectsList />
          <Illustrations />
        </div>
        <div className='main5'>
          <ColoredCardsList />
          <DevelopmentApproach />
        </div>
      </div>
    </div>
  );
}

export default App;