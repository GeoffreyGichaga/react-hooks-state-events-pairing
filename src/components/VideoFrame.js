import React from 'react'

export const VideoFrame = ({prop}) => {
  return (
    <div>
        <iframe
        width={prop.width}
        height={prop.height}
        src={prop.embedUrl}
        frameBorder={prop.frameBorder}
        allowFullScreen={prop.allowFullScreen}
        title={prop.title}
        />
        <p className='textBold'>{prop.views}| Uploaded {prop.createdAt}</p>
    </div>
  )
}
