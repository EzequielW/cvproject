import { Grid, Container , Typography, Box, Button } from '@mui/material'; 

import project1Img from "../assets/img/project1.png";

import ProjectCard from "./ProjectCard";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Home() {
    const projects = [
        {
            id: 1,
            name: "SCTech",
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
                    name: "JavaScript",
                    color: "#1DE9B6"
                },
            ],
            description: "Tech site where each user can post new content, includes user login, comments, text editor and more.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
        {
            id: 2,
            name: "Free Market",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Java",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "MySQL",
                    color: "#00758f"
                },
                {
                    id: 3,
                    name: "JavaScript",
                    color: "#1B5E20"
                },
                {
                    id: 4,
                    name: "React",
                    color: "#61dbfb"
                }
            ],
            description: "Ecommerce site listing available products, allowing filtering and search for ease of use. Includes payment integration and shipment options.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
        {
            id: 3,
            name: "Pawst Me",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Java",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "Kotlin",
                    color: "#43A047"
                },
                {
                    id: 3,
                    name: "MySQL",
                    color: "#00758f"
                },
                {
                    id: 4,
                    name: "Android",
                    color: "#3DDC84"
                }
            ],
            description: "Social network built on kotlin for the app and Spring Boot for the server, allows users to make posts about their pets and share information about missing pets.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
        {
            id: 4,
            name: "Balarama Engine",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "C++",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "C",
                    color: "#43A047"
                }
            ],
            description: "Chess engine built on c++ using bit masks for better performance and alpha-beta pruning/minimax for move search.",
            repository: "https://github.com/EzequielW/VueBlog"
        },
        {
            id: 5,
            name: "Chip 8",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "Rust",
                    color: "#1DE9B6"
                }
            ],
            description: "Chip 8 emulator built on Rust mostly for learning purposes, it includes some roms to play.",
            repository: "https://github.com/EzequielW/VueBlog"
        },
        {
            id: 6,
            name: "Coffee Developments",
            image: project1Img,
            techStack: [
                {
                    id: 1,
                    name: "HTML",
                    color: "#1DE9B6"
                },
                {
                    id: 2,
                    name: "JavaScript",
                    color: "#43A047"
                },
                {
                    id: 3,
                    name: "CSS",
                    color: "#1DE9B6"
                },
                {
                    id: 4,
                    name: "Bootstrap",
                    color: "#563d7c"
                },
            ],
            description: "Simple design for a company landing page.",
            repository: "https://github.com/EzequielW/VueBlog",
            liveDemo: "https://sctechblog.netlify.app/"
        },
    ]

    return (
        <div>
            <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h1" gutterBottom>
                        Test title heading 1
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ maxWidth: 500 }}>
                        Something long as a subtitle 1 something long as a subtitle 1
                        Something long as a subtitle 1 something long as a subtitle 1
                    </Typography>
                    <Button sx={{ mt: 3 }} variant="outlined" size='large'>
                        Contact me
                    </Button>
                </Box>
            </Container>
            <Container sx={{ py: 6 }} maxWidth='xl'>
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
            <Box sx={{ py: 6 }}>
                <ContactForm />
            </Box>
            <Footer />
        </div>
    );
}

export default Home;
