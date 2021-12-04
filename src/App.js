import { useState } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import MainContent from "./containers/mainContent/mainContent";
import store from "./redux/store";

const data = {
  sideBar: [
    {
      text: 'Courses'
    },
    {
      text: 'Lists'
    },
    {
      text: 'Groups'
    },
  ],
  Box: [
    {
      title: 'Illustration',
      lessons: '24 lessons',
      min: '134 min',
      id: 2,
      favorive: false,
      img: 'banan.png'
    },
    {
      title: 'Graphic design',
      lessons: '50 lessons',
      min: '236 min',
      id: 3,
      favorive: true,
      img: 'boxImage.png'
    },
    {
      title: 'UI/Ui',
      lessons: '10 lessons',
      min: '300 min',
      id: 4,
      favorive: false,
      img: 'banan.png'
    },
    {
      title: 'Front-Ened',
      lessons: '5 lessons',
      min: '1000 min',
      id: 5,
      favorive: true,
      img: 'banan.png'
    },
    {
      title: 'Illustration',
      lessons: '24 lessons',
      min: '134 min',
      id: 6,
      favorive: true,
      img: 'banan.png'
    },
  ]
}
function App() {
  const [tab, setTab] = useState(data.sideBar[0].text)

  return (
    <Provider store={store}>
      <div className="App">
        <NavBar tab={tab} data={data} />
        <SideBar setTab={setTab} data={data.sideBar} />
        <MainContent data={data} />
      </div>
    </Provider>
  );
}

export default App;