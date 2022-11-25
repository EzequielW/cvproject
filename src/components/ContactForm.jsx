import { Paper, TextField, Container, Typography, Button } from '@mui/material'; 
import { Box } from '@mui/system';

function ContactForm() {
    return (
        <Container maxWidth='md'>
            <Typography variant="h3" sx={{ textAlign: 'center', pb: 2 }}>
                Contact Me
            </Typography>
            <Paper sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
                <TextField
                    id="outlined"
                    label="Name"
                    sx={{ pb: 2 }} />
                <TextField
                    id="outlined"
                    label="Email"
                    sx={{ pb: 2 }} />
                <TextField
                    id="outlined"
                    label="Subject"
                    sx={{ pb: 2 }} />
                <TextField
                    id="outlined"
                    multiline
                    rows={4}
                    label="Message"
                    sx={{ pb: 2 }} />
                <Box>
                    <Button variant='contained'>
                        Send message
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default ContactForm;
