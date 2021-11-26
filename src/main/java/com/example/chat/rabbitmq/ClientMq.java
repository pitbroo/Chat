package com.example.chat.rabbitmq;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
public class ClientMq {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @GetMapping("/receiveMessage")
    public String get() {
        Object message = rabbitTemplate.receiveAndConvert("topic");

        return Objects.requireNonNull(message).toString();

    }

    @RabbitListener(queues = "topic")
    public void rabbitListener(String message) {
        System.out.println(message);
    }
}
