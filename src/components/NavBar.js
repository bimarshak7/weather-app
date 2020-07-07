import React from 'react';

export default function NavBar(props){
	return(
		<div className='row'>
			<div className='col-md-6'>
				<h1 className='title'>Weather</h1>
			</div>
			<form className='region' onSubmit={(e)=>props.changeWeather(e)}>
				<input className='regioninput' placeholder='Enter your region' onChange={(e)=>props.changeLoc(e.target.value)}/>
			</form>
			<div className='col-md-6'>

			</div>
		</div>
		)
}