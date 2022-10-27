import { Paper, Box, Typography, Link } from '@mui/material'; 
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({project}) {
    return (
        <Paper>
        <Box sx={{ display: 'flex' }}>
            <img width="150px" height="150px" alt="project_image"></img>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography>{ project.name }</Typography>
                <Typography>{ project.description }</Typography>
                <Typography>Tech stack</Typography>
                <Box sx={{ display: 'flex'}}>
                    {
                        project.techStack.map(stack => {
                            return (
                                <Box sx={{ px: 2 }} key={stack.id}>
                                    { 
                                        stack.name ? 
                                        (
                                            <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                <img alt="tech-icon" src={stack.icon} width={stack.width} height={stack.height}></img>
                                                <Typography sx={{ pl: 1 }}>{ stack.name }</Typography>
                                            </Box>
                                        )
                                        :
                                        <img alt="tech-icon" src={stack.icon} width={stack.width} height={stack.height}></img>
                                    }
                                </Box>
                            );
                        })
                    }
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Link href={project.liveDemo} underline="none" sx={{ display: 'flex', alignItems: 'center', pr: 4 }} target="_blank" rel="noopener">
                        <OpenInNewIcon />Live Demo
                    </Link>
                    <Link href={project.repository} underline="none" sx={{ display: 'flex', alignItems: 'center' }} target="_blank" rel="noopener">
                        <GitHubIcon />Github repository
                    </Link>
                </Box>
            </Box>
        </Box>
        </Paper>
    );
}

export default ProjectCard;
