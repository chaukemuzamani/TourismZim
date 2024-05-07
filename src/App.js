import React from 'react';
import Home from './screens/Home'
import Information from './screens/Information'
import VictoriaFalls from './screens/VictoriaFalls';
import GreatZimbabwe from './screens/GreatZimbabwe';
import MorePlaces from './screens/MorePlaces';
import Hwange from './screens/Hwange'
import Footer from './screens/Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <Information/>
      <VictoriaFalls/>
      <GreatZimbabwe/>
      <Hwange/>
      <MorePlaces/>
      <Footer/>
    </div>
  );
}

export default App;
