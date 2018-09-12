package com.petsitterapp.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.petsitterapp.beans.Pet;
import com.petsitterapp.beans.User;

@Transactional
@Repository
public class PetRepositoryImpl implements PetRepository {

	@Autowired
	SessionFactory sf;
	
	
	@Override
	public List<Pet> getAll() {
		return sf.getCurrentSession().createCriteria(Pet.class).list();
	}

	
	@Override
	public Pet getById(int id) {
		// TODO Auto-generated method stub
		return (Pet) sf.getCurrentSession().get(Pet.class, id);
	}
	
	
//	List<Pet> getPetsByUserId(int id) {
//		
//		Criteria accountCriteria = sf.getCurrentSession().createCriteria(Account.class,"acc");
//		Criteria bookCriteria =  accountCriteria .createCriteria("book","b");
//		Criteria orgCriteria =  bookCriteria.createCriteria("organization","org");
//		orgCriteria.add(Restrictions.eq("name", "XYZ"));
//
//		ProjectionList properties = Projections.projectionList();
//		properties.add(Projections.property("name"));
//		properties.add(Projections.property("id"));
//
//		accountCriteria.setProjection(properties);
//		accountCriteria.list();
//		
//	}
	
//	public static void main(String[] args) {
//		
////		PetRepositoryImpl p = new PetRepositoryImpl();
////		List<Pet> pets = p.getPetsByUserId(3);
//		
//		 DetachedCriteria ownerCriteria = DetachedCriteria.forClass(User.class);
//		    ownerCriteria.setProjection(Property.forName("id"));
//		    ownerCriteria.add(Restrictions.eq("firstName", "Omar")); // Omar
//	    
//		    Criteria criteria = sf.getCurrentSession().createCriteria(Pet.class);
//		    Criteria crit = criteria.add(Property.forName("user").in(ownerCriteria));
//		 
//		 List results = crit.list();
//		 System.out.println(results.toString());
//		
//		
//		System.out.println("pets.toString()");
////		System.out.println(pets.toString());
//		
//	}
	
	
//	Going the other way, we obtain all the products from the supplier MegaInc using many-to-one associations:
//	public List<Pet> getPetsByUserId(int id) {
		
//		 return
//		 Criteria crit = sf.getCurrentSession().createCriteria(Pet.class)
//				 		 .createCriteria("users"); // or users?
//	 					.add(Restrictions.eq("userId", id));
//	 					.add(Restrictions.eq("id", id));
//				 		.add(Restrictions.eq("name","Hardware Are We"));
		 
//			 Criteria suppCrit = crit.createCriteria("users"); // or user?
		 
//		 suppCrit.add(Restrictions.eq("name","Hardware Are We"));
	
// https://stackoverflow.com/questions/10620383/how-to-join-tables-using-hibernate-criteria
//		 DetachedCriteria ownerCriteria = DetachedCriteria.forClass(User.class);
//		    ownerCriteria.setProjection(Property.forName("id"));
//		    ownerCriteria.add(Restrictions.eq("firstName", "Omar")); // Omar
//	    
//		    Criteria criteria = sf.getCurrentSession().createCriteria(Pet.class);
//		    Criteria crit = criteria.add(Property.forName("user").in(ownerCriteria));
//		 
//		 List results = crit.list();
//		 System.out.println(results.toString());
//		 return results;
//
//	}
					 
					 //	public List<Pet> getAccountListByOrgName(String name){
//	    return sf.getCurrentSession().createCriteria(Account.class)
//	                .createAlias("book", "book")
//	                .createAlias("book.organization", "organization")
//	                .add(Restrictions.eq("organization.name", name))
//	                .list();
//	}
	
	
//
	@Override
	public Pet add(Pet p) {
		int id = (Integer) sf.getCurrentSession().save(p);
		p.setId(id);
		return p;
	}
	@Override
	public void update(Pet p) {
		// TODO Auto-generated method stub
		
	}


//
////	@Override
////	public List<Pet> getPetsByUser(Integer userId) {
////		// TODO Auto-generated method stub
////		return null;
////	}
//
//	@Override
//	public Pet findById(Integer petId) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Pet findByPetName(String name) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public List<Pet> findByUserId(Integer id) {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
