import { CardList } from "./components/CardList"
import { Header } from "./components/UI/Header"

function App() {

  return (
    <div className="container">
      <Header />
      <div className="cards-container">
        <CardList />
      </div>
    </div>
  )
}

export default App
