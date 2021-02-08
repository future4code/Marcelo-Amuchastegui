import {BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'   
import Home from './Home';
import Moon from './Moon';
import Interplanetary from './Interplanetary';
import Cadastro from './Cadastro'
import Login from './Login';
import Ofertas from './Ofertas'
import SingleGravZero from './SingleGravZero'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact component={Home} exact path="/"/>
                <Route exact component={Cadastro} exact path="/Cadastro"/>
                <Route exact component={Interplanetary} exact path="/Interplanetary"/>
                <Route exact component={Login} exact path="/Login"/>
                <Route exact component={Moon} exact path="/Moon"/>
                <Route exact component={Ofertas} exact path="/Ofertas"/> 
                <Route exact component={SingleGravZero} exact path="/SingleGravZero"/>                             
            </Switch>
        </Router>
    )
}
export default Routes;