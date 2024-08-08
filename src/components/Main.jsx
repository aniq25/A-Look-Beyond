export default function Main(props) {
    const { data } = props;
  
    return (

      <div className="imgContainer">
        {/* If media type equals to an image perform the block */}
        {data.media_type === "image" ? (
          <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
          ) : 
          // If-else media type equals to an image perform the block 
          data.media_type === "video" ? (
          <iframe
            className="videoContainer"
            src={data.url}
            title={data.title || "NASA video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >  
          </iframe>
          ) : 
          // else
          (
          <p>No media available</p>
          )
        }
      </div>
    );
  }
  