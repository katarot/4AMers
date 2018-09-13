package com.petsitterapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petsitterapp.beans.User;
import com.petsitterapp.repository.UserRepository;

@Service("userService")
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public User addUser(User u) {
		return userRepo.add(u);
	}
	
	public List<User> getAll() {
		return userRepo.getAll();
	}
	
	public User getById(int id) {
		return userRepo.getById(id);
	}
	
}
