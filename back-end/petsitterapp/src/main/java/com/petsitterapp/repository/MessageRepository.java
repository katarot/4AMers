package com.petsitterapp.repository;

import java.util.List;

import com.petsitterapp.beans.Message;

public interface MessageRepository {
	List<Message> getAll();
	Message getById(int id);
	Message add(Message m);
	void update(Message m);
}
