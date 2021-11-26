package com.example.chat;

import lombok.Data;

@Data
public class ChatMessage {
    private String value;
    private String user;

    public ChatMessage(String value, String user) {
        this.value = value;
        this.user = user;
    }

    public ChatMessage() {
    }
}
