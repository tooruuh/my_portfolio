import { Route, Switch } from "react-router-dom";
import AboutMe from "../pages/aboutMe";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Qualifications from "../pages/qualifications";
import Technology from "../pages/technology";

export default function Routes() {
    return (
        <Switch>

            <Route  exact path="/">
                <Home />
            </Route>

            <Route  exact path="/AboutMe">
                <AboutMe />
            </Route>

            <Route  exact path="/Projects">
                <Projects />
            </Route>

            <Route  exact path="/Qualifications">
                <Qualifications />
            </Route>

            <Route  exact path="/Technology">
                <Technology />
            </Route>

        </Switch>
    )
}