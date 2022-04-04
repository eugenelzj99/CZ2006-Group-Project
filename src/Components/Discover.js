import React from 'react'

function Discover() {

	const aqua = require('../aqua_demo.json');
	const gyms = require('../gym_demo.json');
	const parks = require('../park_demo.json');
	const sport = require('../sports_demo.json');
	const heleat = require('../healthyEats_demo.json');

	const [aquaNum, setAquaNum] = React.useState(0)

	function addAqua() {
		if(aquaNum!==9)
        setAquaNum(prevNum => prevNum + 1)
    }

	function subAqua() {
		if(aquaNum!==0)
        setAquaNum(prevNum => prevNum - 1)
    }

	const [gymsNum, setGymsNum] = React.useState(0)

	function addGyms() {
		if(gymsNum!==9)
        setGymsNum(prevNum => prevNum + 1)
    }

	function subGyms() {
		if(gymsNum!==0)
        setAquaNum(prevNum => prevNum - 1)
    }

	const [parksNum, setParksNum] = React.useState(0)

	function addParks() {
		if(parksNum!==9)
        setParksNum(prevNum => prevNum + 1)
    }

	function subParks() {
		if(parksNum!==0)
        setParksNum(prevNum => prevNum - 1)
    }

	const [sportNum, setSportNum] = React.useState(0)

	function addSport() {
		if(sportNum!==9)
        setSportNum(prevNum => prevNum + 1)
    }

	function subSport() {
		if(sportNum!==0)
        setSportNum(prevNum => prevNum - 1)
    }

	const [heleatNum, setHeleatNum] = React.useState(0)

	function addHeleat() {
		if(heleatNum!==9)
        setHeleatNum(prevNum => prevNum + 1)
    }

	function subHeleat() {
		if(heleatNum!==0)
        setHeleatNum(prevNum => prevNum - 1)
    }
    //<div dangerouslySetInnerHTML={{__html:aqua.features[aquaNum].properties.description}}></div>
	// className="row gtr-200" wrapper, container then this
	// each section className="col-4 col-12-narrower"
	// big section className="wrapper style1"
	// big div className="container"
	// <div dangerouslySetInnerHTML={{__html:parks.features[parksNum].properties.description}}></div>
	 

  return (
      <div >
                <section >
					<div >
						<div>
							<div className="toprow">
							<section >
							  <div >
									<div className="card">
										<div className="card--stats">
										<b>Swimming</b>
										<p>{aqua.examples[aquaNum].name}</p>
										<p>{aqua.examples[aquaNum].address}</p>
										<p>{aqua.examples[aquaNum].features}</p>
										<p>{aqua.examples[aquaNum].hours}</p>
										<img className = "cardpic" src="/swim_img.png" />
										</div>
										<button className="cardChange" onClick={addAqua}>next</button>
										<button className="cardChange" onClick={subAqua}>back</button>
									</div>
							   </div>
							</section>
							<section >
								<div >								
								<div className="card">
										<div className="card--stats">
										<b>Gyms</b>
										<p>{gyms.examples[gymsNum].name}</p>
										<p>{gyms.examples[gymsNum].address}</p>
										<p>{gyms.examples[gymsNum].features}</p>
										<p>{gyms.examples[gymsNum].hours}</p>
										<img className = "cardpic" src="/gym_img.png" />
										</div>
										<button className="cardChange" onClick={addGyms}>next</button>
										<button className="cardChange" onClick={subGyms}>back</button>
									</div>
								</div>
							</section>
							<section >
								<div >									
								<div className="card">
										<div className="card--stats">
										<b>Parks</b>
										<p>{parks.examples[parksNum].name}</p>
										<p>{parks.examples[parksNum].address}</p>
										<p>{parks.examples[parksNum].features}</p>
										<p>{parks.examples[parksNum].hours}</p>
										<img className = "cardpic" src="/park_img.png" />
										</div>
										<button className="cardChange" onClick={addParks}>next</button>
										<button className="cardChange" onClick={subParks}>back</button>
									</div>
								</div>
							</section>
						  </div>

					      <div className="bottomrow">
							<section >
								<div >									
								<div className="card">
										<div className="card--stats">
										<b>Sports</b>
										<p>{sport.examples[sportNum].name}</p>
										<p>{sport.examples[sportNum].address}</p>
										<p>{sport.examples[sportNum].features}</p>
										<p>{sport.examples[sportNum].hours}</p>
										<img className = "cardpic" src="/sport_img.png" />
										</div>
										<button className="cardChange" onClick={addSport}>next</button>
										<button className="cardChange" onClick={subSport}>back</button>
									</div>
								</div>
							</section>

							<section >
								<div >									
								<div className="card">
										<div className="card--stats">
										<b>Healthier Eateries</b>
										<p>{heleat.examples[heleatNum].name}</p>
										<p>{heleat.examples[heleatNum].address}</p>
										<p>{heleat.examples[heleatNum].features}</p>
										<p>{heleat.examples[heleatNum].hours}</p>
										<img className = "cardpic" src="/eat_img.png" />
										</div>
										<button className="cardChange" onClick={addHeleat}>next</button>
										<button className="cardChange" onClick={subHeleat}>back</button>
									</div>
								</div>
							</section>
							</div>
						</div>
					</div>
				</section>

                </div>
                
  )
}

export default Discover