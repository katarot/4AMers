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

import com.petsitterapp.beans.Pet;
import com.petsitterapp.service.PetService;
import com.petsitterapp.service.UserService;

@RestController
@RequestMapping("/pets")
@CrossOrigin
public class PetController {
	
	@Autowired
	private PetService petService;
	
//	@Autowired 
//	private UserService userService;
	
	
	
/*	GET ALL PETS	*/
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Pet>> getAll() {
		
		System.out.println("In Pet Controller: getAll()");
		
		List<Pet> pet = petService.getAll();
		if(pet.size() == 0) {
			System.out.println("pet size 0");
			pet = null;
			return new ResponseEntity<List<Pet>>(pet, HttpStatus.NOT_FOUND);
		} else {			
			System.out.println("pet -> ");
			System.out.println(pet.toString());
			return new ResponseEntity<List<Pet>>(pet, HttpStatus.OK);
		}
	}

	
	
/*	GET PET BY ID	*/
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Pet> getById(@PathVariable int id) {
		
		return new ResponseEntity<Pet>(petService.getById(id), HttpStatus.OK);
	
	}
	
	
	
/*	ADD PET			*/
	
	@RequestMapping(method=RequestMethod.POST,
					consumes=MediaType.APPLICATION_JSON_VALUE, //request body content
					produces=MediaType.APPLICATION_JSON_VALUE) //response body content
	public ResponseEntity<Pet> addPet(@Valid @RequestBody Pet p) {
		
		p = petService.addPet(p);
		
		if (p == null) {
			
			System.out.println("In Pet Controller: addPet() -> null");
			
			return new ResponseEntity<Pet>(p, HttpStatus.CONFLICT);
			
		} else {
			
			System.out.println("In Pet Controller: addPet()");
			System.out.println(p.toString());
			
			return new ResponseEntity<Pet>(p, HttpStatus.CREATED);
		}
	}
	
	
	
/* 	GET ALL PETS BY USER	*/

//	@RequestMapping(value="/users/{id}/pets", method=RequestMethod.GET)
//	public ResponseEntity<List<Pet>> getAllPetsByUser(@PathVariable int id) {
//		
//		System.out.println("In Pet Controller: getAllPetsByUser("+id+")");
//		
//		List<Pet> pet = petService.getAllPetsByUser(id);
//		
//		if (pet.size() == 0) {
//			pet = null;
//			return new ResponseEntity<List<Pet>>(pet, HttpStatus.NOT_FOUND);
//		} else {
//			return new ResponseEntity<List<Pet>>(pet, HttpStatus.OK);
//		}
//	}
	
//	@RequestMapping(value="/users/{id}/pets")
//	public ResponseEntity<Pet> getAllPetsByUserId(@PathVariable int id) {
//		
//	}
	
//    @GetMapping("/posts/{postId}/comments")
//    public Page<Comment> getAllCommentsByPostId(@PathVariable (value = "postId") Long postId,
//                                                Pageable pageable) {
//        return commentRepository.findByPostId(postId, pageable);
//    }

	
}
