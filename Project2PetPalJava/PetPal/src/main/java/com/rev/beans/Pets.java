package com.rev.beans;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="PETS")
public class Pets {
	
	@Id
	@Column(name="PETS_ID")
	@SequenceGenerator(name="PETS_SEQ_GEN", sequenceName="PETS_SQ", allocationSize=1)
	@GeneratedValue(generator="PETS_SEQ_GEN", strategy=GenerationType.SEQUENCE)
	private int petId;
	private String petName;
	private int userId;
	private String breed;
	private String needs;
	private Blob image;
	private String description;
	private String behavior;
	
	public Pets() {}
	
	public Pets(int petId, String petName, int userId, String breed, String needs, Blob image, String description,
			String behavior) {
		super();
		this.petId = petId;
		this.petName = petName;
		this.userId = userId;
		this.breed = breed;
		this.needs = needs;
		this.image = image;
		this.description = description;
		this.behavior = behavior;
	}
	public int getPetId() {
		return petId;
	}
	public void setPetId(int petId) {
		this.petId = petId;
	}
	public String getPetName() {
		return petName;
	}
	public void setPetName(String petName) {
		this.petName = petName;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public String getNeeds() {
		return needs;
	}
	public void setNeeds(String needs) {
		this.needs = needs;
	}
	public Blob getImage() {
		return image;
	}
	public void setImage(Blob image) {
		this.image = image;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBehavior() {
		return behavior;
	}
	public void setBehavior(String behavior) {
		this.behavior = behavior;
	}
	@Override
	public String toString() {
		return "Pets [petId=" + petId + ", petName=" + petName + ", userId=" + userId + ", breed=" + breed + ", needs="
				+ needs + ", image=" + image + ", description=" + description + ", behavior=" + behavior + "]";
	}
	
	
}
