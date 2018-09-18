package com.petsitterapp.controllers;

import java.util.List;

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

import com.petsitterapp.beans.Message;
import com.petsitterapp.beans.User;
import com.petsitterapp.service.MessageService;

@RestController
@RequestMapping("/messages")
@CrossOrigin
public class MessageController {

	@Autowired
	private MessageService msgServ;

	
	// This should be disabled on final production push
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Message>> getAll() {

		List<Message> msg = msgServ.getAll();
		if (msg.size() == 0) {
			msg = null;
			return new ResponseEntity<List<Message>>(msg, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<List<Message>>(msg, HttpStatus.OK);
		}
	}

//
//	
//	
//	@RequestMapping(value="/{id}", method=RequestMethod.GET)
//	public ResponseEntity<Pet> getById(@PathVariable int id) {
//		
//		return new ResponseEntity<Pet>(petService.getById(id), HttpStatus.OK);
//	
//	}
//	
//		
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, // request body content
			produces = MediaType.APPLICATION_JSON_VALUE) // response body content
	public ResponseEntity<Message> addMessage(@Valid @RequestBody Message m) {

		Message result = msgServ.addMessage(m);

		if (result == null) {
			return new ResponseEntity<Message>(result, HttpStatus.CONFLICT);
		} else {
			return new ResponseEntity<Message>(result, HttpStatus.CREATED);
		}
	}

	@RequestMapping(value="/sender", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, // request body content
			produces = MediaType.APPLICATION_JSON_VALUE) // response body content
	public ResponseEntity<List<Message>> getMessageBySender(@Valid @RequestBody User u) {

		List<Message> result = msgServ.getAllMessagesBySender(u);

		if (result == null) {
			return new ResponseEntity<List<Message>>(result, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<List<Message>>(result, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value="/receiver", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, // request body content
			produces = MediaType.APPLICATION_JSON_VALUE) // response body content
	public ResponseEntity<List<Message>> getMessageByReciever(@Valid @RequestBody User u) {

		List<Message> result = msgServ.getAllMessagesByReceiver(u);

		if (result == null) {
			return new ResponseEntity<List<Message>>(result, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<List<Message>>(result, HttpStatus.OK);
		}
	}
}
