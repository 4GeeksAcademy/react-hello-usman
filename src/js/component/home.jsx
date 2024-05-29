import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<div className="text-center ">
			<Navbar />
			<Jumbotron />
			<div className="row ">
				<div className="col-12 col-md-6 col-lg-3">
					<Card cardText="La condición física en peleadores profesionales es multifacética" cardTitle="Condición Física" cardImage="" />
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<Card cardText="La técnica y habilidad son fundamentales" cardTitle="Técnica y Habilidad" cardImage="" />
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<Card cardText=" Mentalidad altamente positiva, tanto dentro como fuera del campo de ring" cardTitle="Mentalidad " cardImage="" />
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<Card cardText="Planear para atacar con combinaciones rápidas de golpes " cardTitle="Estrategia" cardImage="" />
				</div>
			</div>
			<Footer />


		</div>
	);
};

export default Home;
