import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import PostList from "../components/PostList";
import { API_BASE } from "../constants";

export function Profile() {
	const { user, setMessages } = useOutletContext();

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(API_BASE + "/api/profile", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	if (!user) return null;

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new FormData(form),
			credentials: "include"
		});
		const json = await response.json();
		if (json.messages) setMessages(json.messages);
		if (json.post) {
			setPosts([...posts, json.post]);
			form.reset();
		}
	};

	return (
		<div className="container cont">
			
				<div className="">
					<div>
						<h1 className="text-center mt-2" >Welcome back {user.userName}</h1>
						<p className="text-center"><strong>Email</strong>: {user.email}</p>
						
					</div>
					
				</div>
				<div className="row mt-5 d-flex justify-content-center">
				<div className="col-6 rounded ml-2">
					<h2 className="mt-5 text-center" >My Tracks</h2>
					<PostList posts={posts} />
					<div className="row justify-content-center mt-5">
						{/* <Link className="btn btn-primary" to="/feed">Return to Feed</Link> */}
					</div>
				</div>

				<div className="mt-5 col-5 mx-4">
						<h2 className="text-center ">Add a Song</h2>
						<form action="/api/post/createPost" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
							<div className="my-3">
								<label htmlFor="title" className="form-label ">Title</label>
								<input type="text" className="form-control" id="title" name="title" />
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Caption</label>
								<textarea className="form-control" id="caption" name="caption"></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="imgUpload" className="form-label">MP3 or WAV</label>
								<input type="file" className="form-control" id="imageUpload" name="file" />
							</div>
							{/* <div className="mb-3">
								<label htmlFor="imgUpload" className="form-label">Pic</label>
								<input type="file" className="form-control" id="image2Upload" name="file" />
							</div> */}
							<button type="submit" className="btn btn-warning fw-bold" value="Upload">Submit</button>
						</form>
					</div>
			</div>
			
		</div>
	)
}