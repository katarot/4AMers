package com.petsitterapp.repository;

import java.util.List;

//import org.springframework.data.repository.CrudRepository;

import com.petsitterapp.beans.Pet;

public interface PetRepository /*extends CrudRepository<Pet, Integer>*/ {

	// Functions used here with the CrudRepository extension,
	// does not have to be implemented. 
	// Just declare the functions (findByProperty name format),
	// and Spring Data JPA will implement the method for you.
	
//	public List<Pet> getPetsByUser(int userId);
//	public List<Pet> getPetsByUser(Integer userId);
//	public List<Pet> findByUserId(Integer id);
//	public Pet findById(int petId);
//	public Pet findByPetName(String name);
	
	
	List<Pet> getAll();
	Pet getById(int id);
	Pet add(Pet p);
	void update(Pet p);
	
//	List<Pet> 
//	Session session = HibernateUtil.beginTransaction();
//	Criteria criteria = 
//	      session.createCriteria(User.class);
//	criteria.add(Restrictions.gt("id", 5));
//	List results = criteria.list();
//	HibernateUtil.commitTransaction();
//	for (int i = 0; i<results.size(); i++) {
//	  System.out.println(results.get(i).toString());
//	}
	
}
