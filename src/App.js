import React from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import NewsState from './contexts/news/NewsState';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Search from './components/layout/Search';
import MainSection from './components/news/MainSection';

function App() {
	return (
		<NewsState>
			<div className="App">
				<Header />
				<Search />
				<MainSection />
				<Footer />
			</div>
		</NewsState>
	);
}

export default App;
