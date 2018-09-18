package com.petsitterapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petsitterapp.beans.Pet;
import com.petsitterapp.repository.PetRepository;

@Service("petService")
public class PetService {

	@Autowired
	private PetRepository petRepo;
	
// 	https://www.youtube.com/watch?v=lpcOSXWPXTk
//	https://www.youtube.com/watch?v=_Jnu_jHfQbM
	public Pet addPet(Pet p) {
//		return petRepo.save(p);
		return petRepo.add(p);
	}

	public List<Pet> getAll() {
//		return (List<Pet>) petRepo.findAll();
		return petRepo.getAll();
	}
	
//	public List<Pet> getAllPetsByUser(int userId) {
//		return petRepo.findByUserId(userId);
//	}
	
//	
	public Pet getById(int id) {
//		return petRepo.findById(id);
//		return petRepo.findOne(id);
		return petRepo.getById(id);
	}

	public void update(Pet p) {
		petRepo.update(p);
	}
	
//	public Pet getByName(String petName) {
//		return petRepo.findByPetName(petName);
//	}
	
}
