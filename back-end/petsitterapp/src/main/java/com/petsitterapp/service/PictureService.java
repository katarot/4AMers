package com.petsitterapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petsitterapp.beans.Picture;
import com.petsitterapp.repository.PictureRepository;

@Service("pictureService")
public class PictureService {

	@Autowired
	private PictureRepository pictureRepo;
	
	public Picture addPicture(Picture p) {
		return pictureRepo.add(p);
	}
	
	public Picture getbyId(int id) {
		return pictureRepo.getById(id);
	}
	
	public void update(Picture p) {
		pictureRepo.update(p);
	}
}
