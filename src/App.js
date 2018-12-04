import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import Footer from "./components/Footer";
import NavBar from "./components/navbar";
import Loading from "./components/Loading";
import Copyright from "./components/Copyright";
import adminRoutes from "./admin/routes";
import "./styles/App.css";

const Admin = lazy(() => import("./admin/Index"));
const Logout = lazy(() => import("./components/users/Logout"));
const Login = lazy(() => import("./components/users/Login"));
const Custom = lazy(() => import("./components/Custom"));
const Checkout = lazy(() => import("./components/checkout/Checkout"));
const Menu = lazy(() => import("./components/menu/Menu"));
const AfterSell = lazy(() => import("./components/checkout/AfterSell"));
const EditInfo = lazy(() => import("./components/users/EditInfo"));
const EditPassword = lazy(() => import("./components/users/EditPassword"));
const Register = lazy(() => import("./components/users/Register"));
const Home = lazy(() => import("./components/Home"));
const NotFound = lazy(() => import("./components/NotFound"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0, loaded: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    // test api
    Axios.get("/test").then(res => console.log(res.data));

    this.verifyLogin();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (this.state.height === 0) this.setState({ height: window.innerHeight });
    if (this.state.width === 0) this.setState({ width: window.innerWidth });
  }

  verifyLogin() {
    try {
      const uid = Cookies.get("amicus-salad-uid");
      if (uid) {
        Axios.post("/users/verification", {
          uid: uid
        })
          .then(res => {
            this.setState({
              user: res.data
            });
          })
          .catch(error => console.log(error));
      } else {
        this.setState({ user: null });
      }
    } finally {
      this.setState({ loaded: true });
    }
  }

  render() {
    const adminRoute = adminRoutes.map((item, id) => {
      let component = null;
      if (!this.state.loaded) {
        // loading user or user is not log-in
        component = Loading;
      } else if (!this.state.user) {
        // user is not log in redirect to login
        component = () => <Login verifyLogin={this.verifyLogin} />;
      } else if (this.state.user.permission < item.permission) {
        // permission deny couldn't open page
        component = NotFound;
      } else {
        // you have authourize to access page
        component = () => (
          <Admin user={this.state.user}>{item.component}</Admin>
        );
      }
      return (
        <Route
          key={`${id}-router`}
          exact={item.exact}
          path={item.path}
          component={component}
        />
      );
    });
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <div>
            {window.location.pathname.includes("/admin") ? null : (
              <NavBar user={this.state.user} width={this.state.width} />
            )}
            <div
              className={`${
                window.location.pathname.includes("/admin") ? "" : "main"
              }`}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Home height={this.state.height} />}
                />

                <Route
                  path="/custom"
                  component={() => <Custom user={this.state.user} />}
                />

                <Route
                  path="/menu"
                  component={() => <Menu user={this.state.user} />}
                />

                <Route
                  path="/aftersell"
                  component={() => <AfterSell user={this.state.user} />}
                />

                <Route
                  path="/checkout"
                  component={() => <Checkout user={this.state.user} />}
                />

                {/* Users */}
                <Route path="/users/register" component={Register} />
                <Route
                  path="/users/login"
                  component={() => <Login verifyLogin={this.verifyLogin} />}
                />
                <Route
                  path="/users/logout"
                  component={() => <Logout verifyLogin={this.verifyLogin} />}
                />
                <Route
                  path="/users/edit-info"
                  component={() => <EditInfo user={this.state.user} />}
                />
                <Route
                  path="/users/edit-password"
                  component={() => <EditPassword user={this.state.user} />}
                />

                {/* Admin */}
                {adminRoute}

                {/* 404 not found */}
                <Route component={NotFound} />
              </Switch>
            </div>
            {window.location.pathname.includes("/admin") ? null : (
              <div>
                <Footer />
                <Copyright />
              </div>
            )}
          </div>
        </Suspense>
      </Router>
    );
  }
}

export default App;
