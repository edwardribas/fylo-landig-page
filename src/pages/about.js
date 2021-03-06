import React from 'react';
import illustration from '../assets/img/illustrations/illustration-stay-productive.png';


export default function About () {
    return (
        <section id="about">
            <div className="illustration">
				<img src={illustration} alt="Three people organizing an environment" />
			</div>
			<div className="text">
				<h2>Stay productive, wherever you are</h2>
				<p>
					Never let location be an issue when accessing your files. Fylo has you covered for all of your file
					storage needs.
				</p>
				<p>
					Securely share files and folders with friends, family and colleagues for live collaboration. No email
					attachments required.
				</p>

				<a href="#">See how Fylo works <i className="fa-solid fa-circle-right"></i> </a> {/*eslint-disable-line*/}
			</div>
        </section>
    )
}