import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyApp } from './components/main/MyApp';
import { ParticlesComponent } from './components/personal/particles/ParticlesComponent';

function App() {
  return (
    <div className="main">
      <ParticlesComponent></ParticlesComponent>
      <MyApp></MyApp>
      
    </div>
  );
}




export default App;
