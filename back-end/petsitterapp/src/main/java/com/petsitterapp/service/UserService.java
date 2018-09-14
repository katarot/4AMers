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
		List<User> users = getAll();
		boolean invalidUsername = false;
		boolean invalidEmail = false;
		for (User user : users) {
			if (u.getUsername().equals(user.getUsername())) {	// username not unique
				invalidUsername = true;
			} else if (u.getEmail().equals(user.getEmail())) {	// email not unique
				invalidEmail = true;
			} else {
				// continue
			}
		}
		if (invalidUsername) {
			u.setUsername(null);
			return u;
		} else if (invalidEmail) {
			u.setEmail(null);
			return u;
		} else {
			return userRepo.add(u);
		}
	}
	public void update(User u) {
//		User user = userRepo.getByUsername(u.getUsername());
//		u.setId(user.getId());
		userRepo.update(u);
	}

	public List<User> getAll() {
		return userRepo.getAll();
	}

	public User getById(int id) {
		return userRepo.getById(id);
	}

	public User getByUsername(String username) {
		return userRepo.getByUsername(username);
	}

//	public static void main(String[] args) {
//		User u = userRepo.getByUsername("mollymerritt");
//		System.out.println(u.toString());
//	}

}
