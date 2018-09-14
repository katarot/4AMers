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

import com.petsitterapp.beans.PetSrvReq;
import com.petsitterapp.service.PetSrvReqService;

@RestController
@RequestMapping("/psrequest")
@CrossOrigin
public class PetSrvReqController {
	
	@Autowired
	private PetSrvReqService psService;
	
	
	/*	GET ALL Pet Sitting Service Requests	*/
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<PetSrvReq>> getAll() {
		
		List<PetSrvReq> psList = psService.getAll();
		
		if (psList.size() == 0) {
			
			System.out.println("In PetSrvReqController:getAll() -> there is no data");
			
			psList = null;
			return new ResponseEntity<List<PetSrvReq>>(psList, HttpStatus.NOT_FOUND);
			
		} else {
			
			System.out.println("In PetSrvReqController:getAll() -> there is data");
			
			return new ResponseEntity<List<PetSrvReq>>(psList, HttpStatus.OK);
			
		}
		
	}
	
	
	/*	GET ALL Pet Sitting Service Requests BY ID	*/
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<PetSrvReq> getById(@PathVariable int id) {
		return new ResponseEntity<PetSrvReq>(psService.getById(id), HttpStatus.OK);
	}
	
	
	/* CREATE a Pet Sitting Service Request */
	@RequestMapping(method=RequestMethod.POST,
					consumes=MediaType.APPLICATION_JSON_VALUE,
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PetSrvReq> addPetSrvReq(@Valid @RequestBody PetSrvReq p) {
		
		p = psService.add(p);
		
		if (p == null) {
			
			System.out.println("In PetSrvReqController:addPetSrvReq() -> conflict creating");
			return new ResponseEntity<PetSrvReq>(p, HttpStatus.CONFLICT);
			
		} else {
			
			System.out.println("In PetSrvReqController:addPetSrvReq() -> there is data");
			System.out.println(p.toString());
			return new ResponseEntity<PetSrvReq>(p, HttpStatus.CREATED);
			
		}
		
	}
	
}
