import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserList from "./components/User/UserList";
import UserItem from "./components/User/UserItem";
import FullUser from "./components/User/FullUser";
import Edit from "./components/User/Edit";


export default function App() {


    return (
        <div className="d-flex col-12 mt-5">
            <Link to="/users">
                <button type="button" className="btn btn-secondary w-100">USERS</button>
            </Link>

            <Switch>

                <Route exact path="/users">
                    <UserList/>
                </Route>

                <Route  path="/users/info">
                    <UserList/>
                    <FullUser/>
                </Route>
            </Switch>
        </div>
    );
}
