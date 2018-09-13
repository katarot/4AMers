package com.petsitterapp.repository;

import java.util.List;

import com.petsitterapp.beans.PetSrvReq;

public interface PetSrvReqRepository {
	List<PetSrvReq> getAll();
	PetSrvReq getById(int id);
	PetSrvReq add(PetSrvReq p);
	void update(PetSrvReq p);
}
