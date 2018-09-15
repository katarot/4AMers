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
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, // request body content
			produces = MediaType.APPLICATION_JSON_VALUE) // response body content
	public ResponseEntity<User> addUser(@Valid @RequestBody User u) {
		u = userService.addUser(u);
		if (u == null) {
			System.out.println("In Register Controller: addUser");
			System.out.println(u.toString());
			return new ResponseEntity<User>(u, HttpStatus.CONFLICT);
		} else {
			System.out.println("In Register Controller: addUser");
			System.out.println(u.toString());
			return new ResponseEntity<User>(u, HttpStatus.CREATED);
		}
	}

}