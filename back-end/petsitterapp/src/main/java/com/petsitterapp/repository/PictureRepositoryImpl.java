package com.petsitterapp.repository;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.petsitterapp.beans.Picture;

@Transactional
@Repository
public class PictureRepositoryImpl implements PictureRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
	public Picture getById(int id) {
		return (Picture) sf.getCurrentSession().get(Picture.class, id);
	}

	@Override
	public Picture add(Picture p) {
		int id = (Integer) sf.getCurrentSession().save(p);
		p.setId(id);
		return p;
	}

	@Override
	public void update(Picture p) {
		sf.getCurrentSession().update(p);
		
	}

}
