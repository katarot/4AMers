package com.petsitterapp.repository;

import java.util.List;

import com.petsitterapp.beans.User;


public interface UserRepository {
	
	List<User> getAll();
	User getById(int id);
	User getByUsername(String username);
	User add(User u);
	void update(User u);
	
}
