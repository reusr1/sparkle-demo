/* eslint-disable @next/next/no-img-element */

export default function Background({ backgroundProps, lazy, isAuthorVersion }) {
  const { backgroundContent, isVideo, altText, color, zIndex } = backgroundProps;

  const source = isAuthorVersion ? backgroundContent?._authorUrl : backgroundContent?._publishUrl

  // const aspectRatioStyle = {
  //   aspectRatio: `${videoWidth} / ${videoHeight}`
  // }


  return (
    <div className={`backgroundWrapper ${isVideo ? 'isVideo' : ''}`} style={{ backgroundColor: color, zIndex, }}>
      {backgroundContent?.format?.includes('image/') && <img src={source} alt={altText} className="backgroundImage" loading={lazy ? 'lazy' : 'eager'} />}
      {backgroundContent?.format?.includes('video/') && (
        // <iframe
        //   style={aspectRatioStyle}
        //   className="videoIFrame"
        //   title="Adobe Video Publishing Cloud Player"
        //   src="https://video.tv.adobe.com/v/3409386/?autoplay=true&end=replay"
        //   frameBorder="0"
        //   allow="autoplay"
        //   scrolling="no"
        //   />
        <video 
          className='videoWrapper'
          autoPlay
          loop
          muted
        >
          <source src={source} />
        </video>
      )}
    </div>
  );
}
