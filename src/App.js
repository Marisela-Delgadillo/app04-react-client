import React, {Component} from 'react'; //las {} se usan para buscar algo que esta dnetor de React
import TacosAdmin from './components/TacosAdmin';

//Para poder usarlo en otro archivo se debe exportar, ya sea con clases
//asi se hace una clase:
//El archivo y la clase se pueden llamar igual no importa, con nombre q tengan sentido
export default class App extends Component{
  //App es un component porque viene de Component

  //Si no pongo el render me marca error
  render(){
    return(
      <TacosAdmin/>
      //Aqui va codigo html
      //Ejemplo <h1>Tacos Mary</h1>

      //Que pasa si yo quiero que cambie el componente de acuerdo a la situacion
      //pues se crea una carpeta con components, en este caso se llama PageTitle
      //<PageTitle text='Tacos Espaciales' color='blue'/> //Ahora se carga desde otro documento

    );
  }

}
