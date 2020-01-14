import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                    {/* <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" exact component={LoginComponent} />
                    <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                    <AuthenticatedRoute path="/courses" exact component={ListCoursesComponent} /> */}
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp