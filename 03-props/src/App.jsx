import "./App.css";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card user='Gagan Nagar' bio='Software Engineer' />
      <Card user='Shivraj' bio='Cyber Security' />
      <Card user='Ayush' bio='frontend Developer' />
      <Card user='Gagan Nagar' bio='Software Engineer' />
      <Card user='Shivraj' bio='Cyber Security' />
      <Card user='Ayush' bio='frontend Developer' />
      <Card user='Gagan Nagar' bio='Software Engineer' />
      <Card user='Shivraj' bio='Cyber Security' />
      <Card user='Ayush' bio='frontend Developer' />
    </div>
  )
}

export default App