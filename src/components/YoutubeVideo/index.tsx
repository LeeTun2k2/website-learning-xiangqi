import React from 'react';

interface IYouTubeVideo {
    videoEmbedString: string;
}

const YouTubeVideo: React.FC<IYouTubeVideo> = (props) => {
    const { videoEmbedString } = props;

    // Extract attributes using regular expressions
    const srcMatches = videoEmbedString.match(/src="([^"]+)"/);
    const src = srcMatches ? srcMatches[1] : '';
    
    const widthMatches = videoEmbedString.match(/width="([^"]+)"/);
    const width = widthMatches ? widthMatches[1] : '560'; // Default width if not present
    
    const heightMatches = videoEmbedString.match(/height="([^"]+)"/);
    const height = heightMatches ? heightMatches[1] : '315'; // Default height if not present
    
    const titleMatches = videoEmbedString.match(/title="([^"]+)"/);
    const title = titleMatches ? titleMatches[1] : '';
    
    const allowMatches = videoEmbedString.match(/allow="([^"]+)"/);
    const allow = allowMatches ? allowMatches[1] : '';

    // Extract video ID from the src URL
    const videoIdMatches = src.match(/embed\/([A-Za-z0-9_\-]+)/);
    const videoId = videoIdMatches ? videoIdMatches[1] : '';

    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            width={width}
            height={height}
            title={title}
            frameBorder="0"
            allow={allow}
            allowFullScreen
        />
    );  
};

export default YouTubeVideo;
