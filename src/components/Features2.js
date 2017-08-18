/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class Features2 extends Component {
	render() {
		return (
			<div className="stripe-1">
				<div className="container pb-5">
					<div className="row align-items-center">
						<div className="col-md-12 text-center">
							<h2 className="section-title my-md-5 py-md-5 py-4">Features</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
							<div className="media">
							  <img className="hidden-sm-down d-flex align-self-center mr-3" src="./images/svg/server-icon.svg" alt="server icon" />

							  <div className="media-body">
							    <h4 className="mt-0 section-subtitle">Network Optimizations</h4>

									<ul className="list-bullet-custom section-text">
										<li>Scaling is more predictable</li>
										<li>Atomic congestion control settings</li>
										<li>Reduces bandwidth from protocol overhead</li>
									</ul>
							  </div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="media">
							  <img className="hidden-sm-down d-flex align-self-center mr-3" src="./images/svg/server-icon.svg" alt="server icon" />

							  <div className="media-body">
							    <h4 className="mt-0 section-subtitle">Simple usage</h4>

									<ul className="list-bullet-custom section-text">
										<li>Intuitive single syntax for all protocols</li>
										<li>Feature parity for all protocols for multiplexing</li>
										<li>Stats and monitoring-enabled</li>
									</ul>
							  </div>
							</div>
						</div>
					</div>

					<div className="row pt-5">
						<div className="col-md-6">
							<div className="media">
								<img className="hidden-sm-down d-flex align-self-center mr-3" src="./images/svg/server-icon.svg" alt="server icon" />

								<div className="media-body">
									<h4 className="mt-0 section-subtitle">Performances</h4>

									<ul className="list-bullet-custom section-text">
										<li>Raw throughput up to 8x higher</li>
										<li>Median latency</li>
										<li>Bandwidth</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="media">
								<img className="hidden-sm-down d-flex align-self-center mr-3" src="./images/svg/server-icon.svg" alt="server icon" />

								<div className="media-body">
									<h4 className="mt-0 section-subtitle">Hardware pressure</h4>

									<ul className="list-bullet-custom section-text">
										<li>When running 10 000 users in a typical scenario</li>
										<li>CPU usage is ~15% lower</li>
										<li>RAM is ~10% lower</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default Features2;