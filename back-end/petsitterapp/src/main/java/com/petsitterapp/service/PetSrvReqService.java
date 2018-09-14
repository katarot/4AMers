package com.petsitterapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petsitterapp.beans.PetSrvReq;
import com.petsitterapp.repository.PetSrvReqRepository;

@Service("petSrvReqService")
public class PetSrvReqService {
	
	@Autowired
	private PetSrvReqRepository psRepo;
	
	public PetSrvReq add(PetSrvReq p) {
		return psRepo.add(p);
	}
	
	public List<PetSrvReq> getAll() {
		return psRepo.getAll();
	}
	
	public PetSrvReq getById(int id) {
		return psRepo.getById(id);
	}

}
