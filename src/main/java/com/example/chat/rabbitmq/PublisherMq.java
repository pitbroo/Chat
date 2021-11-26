package com.example.chat.rabbitmq;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublisherMq {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @GetMapping("/addMessage")
    public String get(@RequestParam String message) {
        rabbitTemplate.convertAndSend("message", message);
        return "sent" ;
    }
}
