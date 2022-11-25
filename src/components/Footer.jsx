import { Container, Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box sx={{ backgroundColor: 'text.primary' }}>
            <Container sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', py: 4 }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
                        <Link href='https://github.com/EzequielW' rel='noopener noreferrer' target='_blank'>
                            <GitHubIcon sx={{ color: '#fff', pr: 1, fontSize: 28 }}/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/ezequiel-baez-149319190/' rel='noopener noreferrer' target='_blank'>
                            <LinkedInIcon sx={{ color: '#fff', pl: 1, fontSize: 28 }}/>
                        </Link>
                    </Box>
                    <Typography color='white'>
                        © 2022 Ezequiel Baez
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
