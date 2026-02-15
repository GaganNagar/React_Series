import "./App.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx";
import Card from "./card.jsx";

function App() {
  return (
    <>
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="main-area">
          <h1>Welcome back, Gagan 👋</h1>
          <p>Your React placement series has officially started.</p>
          <Card />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
