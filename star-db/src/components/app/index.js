import React, { useState } from "react";
import "./app.css";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import SwapiService from "../../services/swapi-service";

import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from "../swapi-service-context";
import Header from "../header";
import RandomPlanet from "../random-planet";
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    SecretPage,
    LoginPage,
} from "../pages";
import { PersonDetails } from "../sw-components";

export default class App extends React.Component {
    state = {
        isLoggedIn: false,
    };

    logIn = () => {
        this.setState({ isLoggedIn: true });
    };

    render() {
        const swapiService = new SwapiService();
        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <div className="container">
                            <div className="row">
                                <div className="app-content col-md-12">
                                    <Header />
                                    <RandomPlanet />

                                    <Switch>
                                        <Route
                                            path="/"
                                            render={() => (
                                                <h2>Welcome to StarDB</h2>
                                            )}
                                            exact
                                        />
                                        <Route
                                            path="/people"
                                            exact
                                            component={PeoplePage}
                                        />
                                        <Route
                                            path="/people/:id"
                                            render={({ match }) => {
                                                const { id } = match.params;
                                                return (
                                                    <PersonDetails
                                                        itemId={id}
                                                    />
                                                );
                                            }}
                                        />
                                        <Route
                                            path="/planets/:id?"
                                            component={PlanetPage}
                                        />
                                        <Route
                                            path="/starships/:id?"
                                            component={StarshipPage}
                                        />
                                        <Route
                                            path="/login"
                                            render={() => {
                                                return (
                                                    <LoginPage
                                                        isLoggedIn={isLoggedIn}
                                                        onLogin={this.logIn}
                                                    />
                                                );
                                            }}
                                        />
                                        <Route
                                            path="/secret"
                                            render={() => {
                                                return (
                                                    <SecretPage
                                                        isLoggedIn={isLoggedIn}
                                                    />
                                                );
                                            }}
                                        />
                                        <Route render={() => <h2>Page not found</h2>} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}