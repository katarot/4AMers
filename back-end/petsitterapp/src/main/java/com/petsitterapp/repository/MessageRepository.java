package com.petsitterapp.repository;

import java.util.List;

import com.petsitterapp.beans.Message;
import com.petsitterapp.beans.User;

//@Repository
public interface MessageRepository /*extends JpaRepository<Message,Integer>*/{
	List<Message> getAll();
	Message getById(int id);
	Message add(Message m);
	void update(Message m);
	public List<Message> getMessageBySender(User sender);
	public List<Message> getMessageByReceiver(User sender);
}
