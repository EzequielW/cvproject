import { useState } from 'react';

import { Paper, TextField, Container, Typography, 
    Button, Snackbar, Alert, CircularProgress } from '@mui/material'; 
import { Box } from '@mui/system';

import emailjs from '@emailjs/browser';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailLoading, setEmailLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);

    emailjs.init('8dnJy-p_87BHvIsNW');

    const handleName = (e) => {
        setName(e.target.value);
    };
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubject = (e) => {
        setSubject(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleCloseAlert = () => {
        setEmailError(false);
        setEmailSuccess(false);
    }

    const sendEmail = async () => {
        try{
            setEmailLoading(true);
            const emailParams = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            const response = await emailjs.send('service_0j6kynu','template_62yh0hn', emailParams);
            if(response.status === 200){
                setEmailSuccess(true);
            }
            else{
                setEmailError(true);
            }
            setEmailLoading(false);
        } catch(err){
            console.log(err);
        }
    };

    return (
        <Container maxWidth='md'>
            <Typography variant="h3" sx={{ textAlign: 'center', pb: 2 }}>
                Contact Me
            </Typography>
            <Paper sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
                <TextField
                    label="Name"
                    sx={{ pb: 2 }}
                    value={name}
                    onChange={handleName} />
                <TextField
                    label="Email"
                    sx={{ pb: 2 }}
                    value={email}
                    onChange={handleEmail} />
                <TextField
                    label="Subject"
                    sx={{ pb: 2 }}
                    value={subject}
                    onChange={handleSubject} />
                <TextField
                    multiline
                    rows={4}
                    label="Message"
                    sx={{ pb: 2 }}
                    value={message}
                    onChange={handleMessage} />
                <Box>
                    <Button variant='contained' onClick={sendEmail} disabled={emailLoading}>
                        { emailLoading && (
                            <CircularProgress sx={{ color: '#fff', mr: 1 }} size={25}/>
                        )} 
                        Send message
                    </Button>
                    <Snackbar open={emailSuccess} autoHideDuration={6000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={handleCloseAlert} severity="success">
                            Message was sent successfully!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={emailError} autoHideDuration={6000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={handleCloseAlert} severity="error">
                            Failed to send message, please try again later!
                        </Alert>
                    </Snackbar>
                </Box>
            </Paper>
        </Container>
    );
}

export default ContactForm;
