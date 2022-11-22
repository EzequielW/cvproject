import { Paper, Box, Typography, Link } from '@mui/material'; 
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';

function ProjectCard({project}) {
    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
            <img height="250px" alt="project_image" src={project.image}></img>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 4 }}>
                <Box sx={{ pb: 4 }}>
                    <Typography variant='h5' sx={{ pb: 2 }}>{ project.name }</Typography>
                    <Typography variant='body1'>{ project.description }</Typography>
                </Box>
                <Box sx={{ pb: 4 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            project.techStack.map(stack => {
                                return (
                                    <Box sx={{ pr: 4, display: 'flex', alignItems: "center" }} key={stack.id}>
                                        <CircleIcon sx={{ color: stack.color, fontSize: 14 }}/>
                                        <Typography sx={{ pl: 1, fontSize: 14, fontWeight: 550 }}>{ stack.name }</Typography>
                                    </Box>
                                );
                            })
                        }
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Link href={project.liveDemo} underline="none" sx={{ display: 'flex', alignItems: 'center', pr: 4 }} target="_blank" rel="noopener">
                        <OpenInNewIcon />Live Demo
                    </Link>
                    <Link href={project.repository} underline="none" sx={{ display: 'flex', alignItems: 'center' }} target="_blank" rel="noopener">
                        <GitHubIcon />Github repository
                    </Link>
                </Box>
            </Box>
        </Paper>
    );
}

export default ProjectCard;
