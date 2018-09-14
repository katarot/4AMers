package com.petsitterapp.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.petsitterapp.beans.Message;
import com.petsitterapp.beans.User;

public class MessageRepoImpl implements MessageRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
	public List<Message> getAll() {
		return sf.getCurrentSession().createCriteria(Message.class).list();
	}

	@Override
	public Message getById(int id) {
		return (Message) sf.getCurrentSession().get(Message.class, id);
	}

	@Override
	public Message add(Message m) {
		int id = (Integer) sf.getCurrentSession().save(m);
		m.setId(id);
		return m;
	}
	
	public List<Message> getMessageByUserId(User u) {
		
		return null;
	}

	@Override
	public void update(Message m) {
		// nothing

	}

}
