import { Link } from "react-router-dom";




export default function Index() {
	return <main className="container cont ">
		<div className=" mt-5">
			
				<h2 className="text-center">Upload your music and share it with the world! </h2>
				
				
		<div class="contain d-flex justify-content-center">
			<img src= "https://res.cloudinary.com/onehundreddevs/image/upload/v1673588157/rpnnmbcfz1fmwrfbbd7q.png" className="mt-3"/>
	   		</div> 

				
			   <h3 className="text-center">Connect with other artists to discover new and exciting music.</h3>
			   </div>
			   <div className="d-flex justify-content-around mt-5">
			<Link to="/login" className="col-3 btn btn-warning fw-bold">Login </Link>
			<Link to="/signup" className="col-3 btn btn-warning fw-bold"> Signup</Link>
			
			</div>
			
	</main>
}