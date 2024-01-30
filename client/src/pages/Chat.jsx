import React, { useState } from "react";
import { Grid, Paper, List, ListItem, ListItemText, TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import Navigation from "../components/Navigation";

const Chat = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [messages, setMessages] = useState([]);
    const [filter, setFilter] = useState("");

    const friends = ["Friend 1", "Friend 2", "Friend 3"]; // Fixed list of friends

    const handleFriendClick = (friend) => {
        setSelectedFriend(friend);
    };

    const handleMessageSend = (e) => {
        e.preventDefault();
        // Add new message to the messages list
        setMessages([...messages, { sender: "Me", text: e.target.message.value }]);
        // Clear the message input field
        e.target.message.value = "";
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    // Filter friends based on input value
    const filteredFriends = friends.filter((friend) =>
        friend.toLowerCase().includes(filter.toLowerCase())
    );

    // Dark mode theme
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{ backgroundColor: darkTheme.palette.background.default, minHeight: "100vh" }}>
                <Navigation />
                <div style={{ marginTop: 64, position: "fixed", top: 0, bottom: 0, left: 0, right: 0, overflow: "hidden" }}>
                    <Grid container spacing={3} justifyContent="center" style={{ height: "100%", padding: 20 }}>
                        <Grid item xs={3}>
                            {/* Left Panel - Friends */}
                            <Paper style={{ height: "100%", backgroundColor: darkTheme.palette.background.paper }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Filter Friends"
                                    value={filter}
                                    onChange={handleFilterChange}
                                    sx={{ marginBottom: 1, marginLeft: "10px", width: "95%", marginTop: "10px"}}
                                />
                                <List>
                                    {filteredFriends.map((friend, index) => (
                                        <ListItem button key={index} onClick={() => handleFriendClick(friend)} sx={{ '&:hover': { backgroundColor: darkTheme.palette.action.hover } }}>
                                            <PersonIcon color={selectedFriend === friend ? "primary" : "inherit"} />
                                            <ListItemText primary={friend} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={9}>
                            {/* Right Panel - Chat */}
                            <Paper style={{ height: "100%", overflowY: "auto", backgroundColor: darkTheme.palette.background.paper }}>
                                <div style={{ padding: 20 }}>
                                    <div style={{ marginBottom: 10 }}>
                                        <b>{selectedFriend || "Select a friend"}</b>
                                    </div>
                                    <div style={{ height: "60vh", overflowY: "auto", marginBottom: 10 }}>
                                        {messages.map((message, index) => (
                                            <div key={index}>
                                                <b>{message.sender}: </b>
                                                <span>{message.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <form onSubmit={handleMessageSend}>
                                        <TextField
                                            name="message"
                                            variant="outlined"
                                            fullWidth
                                            label="Type a message"
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            endIcon={<SendIcon />}
                                            style={{ marginTop: 10 }}
                                        >
                                            Send
                                        </Button>
                                    </form>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Chat;
