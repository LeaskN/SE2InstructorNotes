import React, { Component } from 'react';
import './Portfolio.css'
// Image, Icon, ShortDesc, URL, leads to project
// Image, Title, Description (2 sent), tech, link, githublink, leads to project 
// Image, (has hidden type), needs more info, leads to image(bad)
// Image, title, tech, (leads to project description page)
// Image, ShortDesc, URL, leads to project description page
class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundImage: 'https://designshack.net/wp-content/uploads/placeholder-image.png'
    };
  }

  createCards = () => {
    const allProjects = [
      {
        url: 'https://videosync.co/',
        title: 'VideoSync',
        desc: 'VideoSync can sync your music like bluetooth!',
        tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'FullStack'],
        img: 'https://nicholasleask.com/Media/video_sync.png'
      },
      {
        url: 'https://leaskn.github.io./',
        title: 'Galvanize Game',
        desc: 'Run from the enemies!',
        tech: ['HTML', 'CSS', 'JavaScript'],
        img: 'https://nicholasleask.com/Media/Galvanize_Game_Front_Page_Image.png'
      },
    ];

    return allProjects.map(project => {
      console.log(project)
      return (
        <div key={project.title} className="projectCard" style={{backgroundImage:`url(${project.img || this.state.backgroundImage})`}}>
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          <div className='technologies'><ul>{project.tech.map(tech =>{return <li>{tech}</li>})}</ul></div>
        </div>
      )
    });
  }

  render(){
    return(
      <div className="portfolio" name="Portfolio">
        {this.createCards()}
      </div>
    )
  }

}

export default Portfolio;