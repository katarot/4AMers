package com.petsitterapp.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.petsitterapp.beans.Message;
import com.petsitterapp.beans.User;

@Transactional
@Repository
public class MessageRepoImpl implements MessageRepository{

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
	
	public List<Message> getMessageBySender(User sender) {
		return sf.getCurrentSession().createCriteria(Message.class).add(Restrictions.eq("sender", sender)).list();
		
	}
	@Override
	public void update(Message m) {
		// nothing

	}

	@Override
	public List<Message> getMessageByReceiver(User receiver) {
		return sf.getCurrentSession().createCriteria(Message.class).add(Restrictions.eq("receiver", receiver)).list();
	}

}
