package com.example.chat;

import lombok.Data;

@Data
public class ChatMessage {
    private String value;

    public ChatMessage(String value) {
        this.value = value;
    }

    public ChatMessage() {
    }
}
