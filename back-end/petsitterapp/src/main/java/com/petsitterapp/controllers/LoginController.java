package com.petsitterapp.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.petsitterapp.beans.User;
import com.petsitterapp.service.UserService;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {
	
	@Autowired
//	private static UserService userService;	// used for main method
	private UserService userService;
	
	@RequestMapping(method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, //request body content
			produces=MediaType.APPLICATION_JSON_VALUE) //response body content
	public ResponseEntity<User> login(@Valid @RequestBody User user) {
		// u = { username, password }
		// getByUsername
		
		User u = userService.getByUsername(user.getUsername());
		if (u == null) {
			System.out.println("In User Controller: addUser");
			System.out.println(u.toString());
			return new ResponseEntity<User>(u, HttpStatus.CONFLICT);
		} else {
			System.out.println("In User Controller: addUser");
			System.out.println(u.toString());
			if (u.getId() == 0) {
				System.out.println(u);
				return new ResponseEntity<User>(new User(), HttpStatus.CREATED);
			} else if (u.getPassword().equals(user.getPassword())) {
				return new ResponseEntity<User>(u, HttpStatus.CREATED);
			} else {	// incorrect password
				return new ResponseEntity<User>(new User(), HttpStatus.CREATED);
//				return null;
			}
		}
	}
	
//	public static void main(String[] args) {
//		User u = userService.getByUsername("mollymerritt");
//		System.out.println(u.toString());
//	}
	
}
