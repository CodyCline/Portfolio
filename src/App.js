import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';
import Projects from './Containers/Projects/Projects'
import ProjectPage from './Containers/ProjectPage/ProjectPage';
import './App.scss';

class App extends React.Component {
	render () {
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/projects" component={Projects}/>
					<Route path="/project-testxxx" component={ProjectPage}/>
					<Route path="/contact"/>
				</Switch>
			</Layout>
		);
	}
}

export default App;
