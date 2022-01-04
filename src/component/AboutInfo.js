import React from 'react';

const AboutInfo = props => {
  return (
    <div className="m-8 p-4 rounded-xl flex flex-col
    text-center justify-center items-center
    text-white dark:text-black
    bg-gray-800 dark:bg-gray-100 shadow-inner">
      <p className="lg:w-9/12">Simple site that displays a collection of the Wargroove Community, mainly competitive PvP players.<br/>
        You can input your information with the Google Form link provided in the sidebar.
        Your info can also be changed with the same form. (Google sign-in required)<br/><br/>
        If you don't feel comfortable with Google Form, you can message me directly on discord.
      </p>
      <br/>
      <span>Features are still being developed, so expect some visual/functional bugs</span>
      <span>Site made by Jams</span>

      {props.children}
    </div>
  )
}

export default AboutInfo;