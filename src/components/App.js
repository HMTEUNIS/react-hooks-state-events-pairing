import video from "../data/video.js";
import Likes from "./Likes.js";
import Comments from "./Comments.js";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} veiws | Uploaded {video.createdAt}</p>
      <Likes info = {video}/>
      <Comments info = {video.comments} />
    </div>
  );
}

export default App;
