import { Link } from "react-router-dom";

export default function Foot() {
	
	return (
		<div className="container  fooot">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link className="nav-link px-2 text-warning outL" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-warning outL" to="/login">Login</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-warning outL" to="/profile">Profile</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-warning outL" to="/Faqs">FAQs</Link></li>
      <li className="nav-item"><Link className="nav-link px-2 text-warning outL" to="/about">About</Link></li>
    </ul>
    <h5 className="text-center text-light outL">&copy; 2022 Cloud City LLC</h5>
  </footer>
</div>
		
		
	
		
		/* <div className='fixed-bottom bg-dark text-light text-center py-3 my-4' >
			<ul className="nav justify-content-center border-botom pb-3 mb-3">
			<h5>&copy;2023 CloudCity LLC</h5>
			
			</ul>
		</div> */
	)
}