import "./App.css";
import Header from "./components/header";
import Orbit from "./components/Orbit";
import About from "./components/About";
import News from "./components/News";
import Headlines from "./components/Headlines";

function App() {
  // let weatherData = weather.list.map((item) => ({
  //   city: item.city.name,
  //   country: item.city.country,
  //   description: item.list[0].weather[0].description,
  //   temp: item.list[0].main.temp,
  //   icon: item.list[0].weather[0].icon,
  // }));
  // console.log(weatherData);

  return (
    <main>
      <Header />
      <div className="container">
        <About />
        <Orbit />
      </div>
      <section className="weather-section">
        <News />
      </section>
      <section className="headlines-section">
        <Headlines />
      </section>
    </main>
  );
}

export default App;
