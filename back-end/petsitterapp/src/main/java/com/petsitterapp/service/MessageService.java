package com.petsitterapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.petsitterapp.beans.Message;
import com.petsitterapp.repository.MessageRepository;

public class MessageService {
	
	@Autowired
	private MessageRepository msgRepo;
	
	public Message addMessage(Message m) {
		return msgRepo.add(m);
	}

	public List<Message> getAll() {
		return msgRepo.getAll();
	}
	
//	public List<Pet> getAllPetsByUser(int userId) {
//		return petRepo.findByUserId(userId);
//	}
	
//	
	public Message getById(int id) {
//		return petRepo.findById(id);
//		return petRepo.findOne(id);
		return msgRepo.getById(id);
	}
}
