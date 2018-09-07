package com.rev.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="PICTURES_FILEPATH")
public class Pictures {

	@Id
	@Column(name="PICTURES_FILEPATH_ID")
	@SequenceGenerator(name="PICTURES_FILEPATH_SEQ_GEN", sequenceName="PICTURES_FILEPATH_SQ", allocationSize=1)
	@GeneratedValue(generator="PICTURES_FILEPATH_SEQ_GEN", strategy=GenerationType.SEQUENCE)
	private int picId;
	
	//@Column(nullable=true)
	private int petId; //fk
	
	@Column(nullable=false)
	private int userId; //fk
	
	//@Column(nullable=true)
	private String filePath;

	public Pictures() {}

	public Pictures(int picId, int petId, int userId, String filePath) {
		super();
		this.picId = picId;
		this.petId = petId;
		this.userId = userId;
		this.filePath = filePath;
	}

	public int getPicId() {
		return picId;
	}

	public void setPicId(int picId) {
		this.picId = picId;
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int petId) {
		this.petId = petId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "Pictures [picId=" + picId + ", petId=" + petId + ", userId=" + userId + ", filePath=" + filePath + "]";
	}
	
	
	
}
