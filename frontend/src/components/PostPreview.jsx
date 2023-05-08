import { Link } from "react-router-dom";

const PostPreview = ({ _id, image, caption, title }) => <li className="  warning mt-1 playerF  ">
	<Link className="link-warning" to={`/post/${_id}`}>
		{<h3 className="dark songTitle">{title}</h3>}
	</Link>		
		{<h5 className="songCaption">{caption}</h5>}
	<div className="d-flex justify-content-center">
		{image.toLowerCase().endsWith('.mp4') ? <video src={image} controls alt={caption} ></video> : image.toLowerCase().endsWith('.mp3') ? <audio src={image} controls alt={caption} className="audioPlayer col-11  " ></audio> : image.toLowerCase().endsWith('.wav') ? <audio src={image} controls alt={caption} className="audioPlayer col-11  " ></audio> : <img src={image} className="img-fluid" alt={caption} />}
		</div>
</li>

export default PostPreview;