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
//		Query q = sf.getCurrentSession()
//				.createQuery("from User where lower(username) like :param", User.class);
//		q.setParameter("param", username.toLowerCase());
//		User u = q.getFirstResult();
		
		
//		String hql = "FROM User where lower(username) like :param";
//		Query q = sf.getCurrentSession().createQuery(hql);
//		q.setParameter("param", username.toLowerCase());
//		List<User> uList = q.list();
//		System.out.println(uList.size());
//		return uList.get(0);
		
//		String sql = "SELECT * from User WHERE username = ?";
//		Query q = sf.getCurrentSession().createSQLQuery(sql);
//		q.setParameter(1, "ramo");
//		List<User> uList = q.list();
//		System.out.println(uList.size());
//		return uList.get(0);
		
		List<User> users = getAll();
		User user = new User();
		for (User u : users) {
			if (u.getUsername().equals(username)) {
				user = u;
			}
		}
		return user;
	}
	
//	public static void main(String[] args) {
	
	
//		String username = "mollymerritt";
//		try {
//			String hql = "FROM User where lower(username) like :param";
//			Query q = sf.getCurrentSession().createQuery(hql);
//			q.setParameter("param", username.toLowerCase());
//			List<User> uList = q.list();
//			System.out.println(uList.size());
//			System.out.println(uList.get(0).toString());
//		} catch(NullPointerException e) {
//			e.printStackTrace();
//		}
		
		
//		UserRepoImpl userRepoImpl = new UserRepoImpl();
//		String username = "mollymerritt";
//		User u = userRepoImpl.getByUsername(username);
//		System.out.println(u.toString());
//		
//	}

}
