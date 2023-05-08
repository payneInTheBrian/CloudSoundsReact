import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { API_BASE } from "../constants";



export default function Post() {
	const { user } = useOutletContext();
	const postId = useParams().id;
	const navigate = useNavigate();

	const [post, setPost] = useState();
	useEffect(() => {
		fetch(API_BASE + `/api/post/${postId}`, { credentials: "include" })
			.then((res) => res.json())
			.then(({ post }) => setPost(post));
	}, [setPost, postId]);

	useEffect(() => {
		fetch(API_BASE + "/api/profile", { credentials: "include" })
			.then((res) => res.json())
			
	}, []);

	if (post === undefined) return null;
	else if (post === null) return <h2>Post not found</h2>;

	const handleLike = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			credentials: "include"
		});
		const likes = await response.json();
		setPost({ ...post, likes });
	};

	const handleDelete = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			credentials: "include"
		});
		navigate(-1);
	};


	return (
		<div className="container cont d-flex justify-content-center">
			<div className="row insideCont  mt-5">
				<div className="">
					<h2 className="songTitle">{post.title.toUpperCase()}</h2>
					<p className="songTitle ">{post.caption}</p>
					<p className="songTitle ">{post.userName}</p>
					<div className="d-flex justify-content-center">
					{post.image.endsWith('.mp4') ? <video src={post.image} alt={post.caption} ></video> : 
					 post.image.toLowerCase().endsWith('.mp3') ? 
					 <audio src={post.image} className="audioPlayer row col-8 " controls alt={post.caption} ></audio> : 
					 post.image.toLowerCase().endsWith('.wav') ?
					 <audio src={post.image} className="audioPlayer col-8 " controls alt={post.caption} ></audio> : 
					<img src={post.image} className="img-fluid" />}
					</div>
  
					{console.log(post.image)}
					
					<div className="row d-flex justify-content-center">
						<form
							className="col-3 d-flex justify-content-center"
							action={`/api/post/likePost/${post._id}?_method=PUT`}
							method="POST"
							onSubmit={handleLike}
						>
							<button className="btn btn-warning fa fa-heart " type="submit"></button>
						</form>
						<h6 className="col-3 d-flex justify-content-center">Likes: {post.likes}</h6>
						{post.user === user._id && (
							<form
								action={`/api/post/deletePost/${post._id}?_method=DELETE`}
								method="POST"
								className="col-3 d-flex justify-content-center"
								onSubmit={handleDelete}
							>
								<button className="btn btn-warning fa fa-trash justify-content-center" type="submit"></button>
							</form>
						)}
					</div>
				</div>
				
				{/* <div className="col-6 mt-5 d-flex justify-content-center">
					<Link className="btn btn-warning mx-2 fw-bold" to="/profile">Return to Profile</Link>
					<Link className="btn btn-warning mx-2 fw-bold" to="/feed">Return to Feed</Link>
				</div> */}
			</div>
		</div>
	)
}