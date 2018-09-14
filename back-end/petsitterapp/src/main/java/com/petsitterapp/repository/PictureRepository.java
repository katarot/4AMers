package com.petsitterapp.repository;

import com.petsitterapp.beans.Picture;

public interface PictureRepository {

	Picture getById(int id);
	Picture add(Picture p);
	void update(Picture p);
	
}
