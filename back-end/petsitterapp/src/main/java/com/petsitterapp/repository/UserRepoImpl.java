package com.petsitterapp.repository;

import java.util.List;

//import org.hibernate.Query;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.petsitterapp.beans.User;

@Transactional
@Repository
public class UserRepoImpl implements UserRepository {

	@Autowired
	SessionFactory sf;
//	static SessionFactory sf;
	
	@Override
	public List<User> getAll() {
		return sf.getCurrentSession().createCriteria(User.class).list();
	}

	@Override
	public User getById(int id) {
		return (User) sf.getCurrentSession().get(User.class, id);
	}

	@Override
	public User add(User u) {
		int id = (Integer) sf.getCurrentSession().save(u);
		u.setId(id);
		return u;
	}

	@Override
	public void update(User u) {
		sf.getCurrentSession().update(u);
	}

	@Override
	public User getByUsername(String username) {
		
		List<User> users = getAll();
		User user = new User();
		for (User u : users) {
			if (u.getUsername().equals(username)) {
				user = u;
			}
		}
		return user;
	}
	

}
