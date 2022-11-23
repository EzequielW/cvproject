import { Grid, Container } from '@mui/material'; 

import project1Img from "../assets/img/project1.png";

import ProjectCard from "./ProjectCard";

function Home() {
    const projects = [
        {
            id: 1,
            name: "Tech Blog",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Vue",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "JavaScript",
                    color: "#1DE9B6"
                },
                {
                    id: 3,
                    name: "Node",
                    color: "#43A047"
                },
                {
                    id: 4,
                    name: "MongoDB",
                    color: "#1B5E20"
                }
            ],
            description: "Tech site where each user can post new content, includes user login, comments, text editor and more.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
        {
            id: 2,
            name: "Tech Blog",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Vue",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "Node",
                    color: "#43A047"
                },
                {
                    id: 3,
                    name: "MongoDB",
                    color: "#1B5E20"
                }
            ],
            description: "Tech site where each user can post new content, includes user login, comments, text editor and more.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
        {
            id: 3,
            name: "Tech Blog",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Vue",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "Node",
                    color: "#43A047"
                },
                {
                    id: 3,
                    name: "MongoDB",
                    color: "#1B5E20"
                }
            ],
            description: "Tech site where each user can post new content, includes user login, comments, text editor and more.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
        {
            id: 4,
            name: "Tech Blog",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Vue",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "Node",
                    color: "#43A047"
                },
                {
                    id: 3,
                    name: "MongoDB",
                    color: "#1B5E20"
                },
                {
                    id: 4,
                    name: "Vue",
                    color: "#1DE9B6"
                },
                {
                    id: 5,
                    name: "Node",
                    color: "#43A047"
                },
                {
                    id: 6,
                    name: "MongoDB",
                    color: "#1B5E20"
                }
            ],
            description: "Tech site where each user can post new content, includes user login, comments, text editor and more.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        }
    ]

    return (
        <div>
            <Container sx={{ py: 4 }} maxWidth='xl'>
                <Grid container columnSpacing={3} rowSpacing={4}>
                    {
                        projects.map(project => {
                            return (
                                <Grid item xs={12} md={6} lg={4} key={project.id}>
                                    <ProjectCard project={project}/>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default Home;
