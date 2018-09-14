package com.petsitterapp.controllers;

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

import com.petsitterapp.beans.Pet;
import com.petsitterapp.beans.Picture;
import com.petsitterapp.service.PictureService;

@RestController
@RequestMapping("/picture")
@CrossOrigin
public class PictureController {

	@Autowired
	private PictureService pictureService;
	
	
	//add picture
	@RequestMapping(method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE, //request body content
			produces=MediaType.APPLICATION_JSON_VALUE) //response body content
	public ResponseEntity<Picture> addPicture(@Valid @RequestBody Picture p) {

		p = pictureService.addPicture(p);

		if (p == null) {

			System.out.println("In Picture Controller: addPicture() -> null");

			return new ResponseEntity<Picture>(p, HttpStatus.CONFLICT);

		} else {

			System.out.println("In Picture Controller: addPicture()");
			System.out.println(p.toString());

			return new ResponseEntity<Picture>(p, HttpStatus.CREATED);
		}
	}

	
	
	
	// get by ID
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Picture> getById(@PathVariable int id) {
		return new ResponseEntity<Picture>(pictureService.getbyId(id), HttpStatus.OK);
	}
	
	
	// update filepath table
	@RequestMapping(method=RequestMethod.PUT,
			consumes=MediaType.APPLICATION_JSON_VALUE, //request body content
			produces=MediaType.APPLICATION_JSON_VALUE) //response body content
	public ResponseEntity<Picture> update(@Valid @RequestBody Picture p) {
		
		if ( p == null) {
			System.out.println("In Picture Controller: update where p is null");
			System.out.println(p.toString());
			return new ResponseEntity<Picture>(p, HttpStatus.CONFLICT);
			} else {
				System.out.println("In Picture Controller: update where p is not null");
				System.out.println(p.toString());
				pictureService.update(p);
				return new ResponseEntity<Picture>(p, HttpStatus.CREATED);
			}
		}
}
	

