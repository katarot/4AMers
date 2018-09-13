package com.petsitterapp.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.petsitterapp.beans.PetSrvReq;

@Transactional
@Repository
public class PetSrvReqRepositoryImpl implements PetSrvReqRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
	public List<PetSrvReq> getAll() {
		return sf.getCurrentSession().createCriteria(PetSrvReq.class).list();
	}

	@Override
	public PetSrvReq getById(int id) {
		return (PetSrvReq) sf.getCurrentSession().get(PetSrvReq.class, id);
	}

	@Override
	public PetSrvReq add(PetSrvReq p) {
		int id = (Integer) sf.getCurrentSession().save(p);
		p.setId(id);
		return p;
	}

	@Override
	public void update(PetSrvReq p) {
		// TODO Auto-generated method stub
		
	}

	
	
}
