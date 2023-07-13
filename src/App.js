import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowCards from "./Components/RowCards/RowCards";
import * as genre from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowCards url={genre.originals} title='Netflix Originals'/>
      <RowCards url={genre.action} title='Action' isSmall/>
      <RowCards url={genre.adventure} title='Adventure' isSmall/>
      <RowCards url={genre.comedy} title='Comedy' isSmall/>
      <RowCards url={genre.romance} title='Romance' isSmall/>
      <RowCards url={genre.horror} title='Horror' isSmall/>
      <RowCards url={genre.family} title='Family' isSmall/>
      <RowCards url={genre.drama} title='Drama' isSmall/>
    </div>
  );
}

export default App;
