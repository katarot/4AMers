package com.petsitterapp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.petsitterapp.beans.User;
import com.petsitterapp.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(method=RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> getAll() {
		
		System.out.println("In User Controller");
		
		List<User> users = userService.getAll();
		if(users.size() == 0) {
			users = null;
			System.out.println("");
			return new ResponseEntity<List<User>>(users, HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<List<User>>(users, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getById(@PathVariable int id) {
		return new ResponseEntity<User>(userService.getById(id), HttpStatus.OK);
	}

	
	@RequestMapping(method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, //request body content
			produces=MediaType.APPLICATION_JSON_VALUE) //response body content
	public ResponseEntity<User> update(@Valid @RequestBody User u) { 

		if (u == null) {
			System.out.println("In User Controller: update");
			System.out.println(u.toString());
			return new ResponseEntity<User>(u, HttpStatus.CONFLICT);
		} else {
			System.out.println("In User Controller: update");
			System.out.println(u.toString());
			userService.update(u);
			return new ResponseEntity<User>(u, HttpStatus.CREATED);
		}
	}
	
}
