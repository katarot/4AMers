package com.petsitterapp.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="PICTURES")
public class Picture {
	
	@Id
	@Column(name="PICTURE_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="picture")
	@SequenceGenerator(name="picture", sequenceName="ps_picture_seq", allocationSize=1)
	private int id;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PET_ID")
	private Pet pet;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="USER_ID")
	private User user;
	
	private String filePath;	// image file path
	
	public Picture() {}
	
	public Picture(int id, Pet pet, User user, String filePath) {
		super();
		this.id = id;
		this.pet = pet;
		this.user = user;
		this.filePath = filePath;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "Picture [id=" + id + ", pet=" + pet + ", user=" + user + ", filePath=" + filePath + "]";
	}
	
}
