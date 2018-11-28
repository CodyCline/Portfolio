import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Projects from './Containers/Projects/Projects'
import ProjectPage from './Containers/ProjectPage/ProjectPage';
import './App.scss';

class App extends React.Component {
	render () {
		return (
			<Layout>
				<Switch>
					<Route exact path="/"/>
					<Route path="/projects" component={Projects}/>
					<Route path="/contact"/>
					<Route path="/project-testxxx" component={ProjectPage}/>
				</Switch>
			</Layout>
		);
	}
}

export default App;
