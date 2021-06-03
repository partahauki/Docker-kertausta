import Header from './components/Header.js'
import Formi from './components/Formi.js'

function App() {

  const title = "Submit string!"

  return (
    <div className="container"> 
      <Header title={title} />
      <Formi />
    </div>
  );
}

export default App;
