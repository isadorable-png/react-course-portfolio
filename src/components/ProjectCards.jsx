import React from 'react'
import Card from "./Card.jsx";
import projects from '../projects.json';

function ProjectCards() {
  console.log(projects);
  return (
    <>
      {projects.projects.map((project) => (
        <Card key={project.id} project= {project} />
      )) }
    </>
)
}

export default ProjectCards