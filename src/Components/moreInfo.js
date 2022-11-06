import React from 'react'


const moreInfo = ({userData}) => {
    const gitUrl = `${userData.git_url}`;
  return (
    <div>{gitUrl}
        
    </div>
  )
}

export default moreInfo