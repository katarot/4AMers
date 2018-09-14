package com.petsitterapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petsitterapp.beans.Message;
import com.petsitterapp.beans.User;
import com.petsitterapp.repository.MessageRepository;

@Service("messageService")
public class MessageService {
	
	@Autowired
	private MessageRepository messageRepository;
	
	public Message addMessage(Message m) {
		return messageRepository.add(m);
	}

	public List<Message> getAll() {
		return messageRepository.getAll();
	}
	
	public List<Message> getAllMessagesBySender(User u) {
		return messageRepository.getMessageBySender(u);
	}
	
	public List<Message> getAllMessagesByReceiver(User u) {
		return messageRepository.getMessageByReceiver(u);
	}

	public Message getById(int id) {
		return messageRepository.getById(id);
	}
}
