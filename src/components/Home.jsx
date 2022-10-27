import { Container } from '@mui/material'; 

import vueLogo from "../assets/icons/vue_logo.png";
import nodeLogo from "../assets/icons/nodejs_logo.png";
import mongoDBLogo from "../assets/icons/mongodb_logo.png";
import vuetifyLogo from "../assets/icons/vuetify_logo.png";

import ProjectCard from "./ProjectCard";

function Home() {
    const projects = [
        {
            id: 1,
            name: "Tech Blog",
            image: "",
            techStack: [
                {
                    id: 1,
                    name: "Vue.js",
                    icon: vueLogo,
                    width: "30",
                    height: "30"
                },
                {
                    id: 2,
                    icon: nodeLogo,
                    width: "50",
                    height: "30"
                },
                {
                    id: 3,
                    icon: mongoDBLogo,
                    width: "90",
                    height: "30"
                },
                {
                    id: 4,
                    name: "Vuetify",
                    icon: vuetifyLogo,
                    width: "30",
                    height: "30"
                }
            ],
            description: "",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        }
    ]

    return (
        <div>
            <Container maxWidth="lg" sx={{ pt: 3}}>
                {
                    projects.map(project => {
                        return (
                            <ProjectCard project={project} key={project.id}/>
                        );
                    })
                }
            </Container>
        </div>
    );
}

export default Home;
