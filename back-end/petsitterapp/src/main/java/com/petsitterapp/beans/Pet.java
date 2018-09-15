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
import org.springframework.stereotype.Repository;

@Component
@Entity
//@Repository	// this is new
@Table(name="PETS")
public class Pet {
	
	@Id
	@Column(name="PET_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="pet")
	@SequenceGenerator(name="pet", sequenceName="ps_pet_seq", allocationSize=1)
	private int id;
	
	@Column(nullable=false)
	private String petName;
	private String breed;
	private String needs;
	private String petDescription;
	private String behaviour;
	private String image;	// image path
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="USER_ID", nullable=false)
	private User user;
	
	public Pet() {}

	public Pet(int id, String petName, String breed, String needs, String petDescription, String behaviour,
			String image, User user) {
		super();
		this.id = id;
		this.petName = petName;
		this.breed = breed;
		this.needs = needs;
		this.petDescription = petDescription;
		this.behaviour = behaviour;
		this.image = image;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPetName() {
		return petName;
	}

	public void setPetName(String petName) {
		this.petName = petName;
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

	public String getPetDescription() {
		return petDescription;
	}

	public void setPetDescription(String petDescription) {
		this.petDescription = petDescription;
	}

	public String getBehaviour() {
		return behaviour;
	}

	public void setBehaviour(String behaviour) {
		this.behaviour = behaviour;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Pet [id=" + id + ", petName=" + petName + ", breed=" + breed + ", needs=" + needs + ", petDescription="
				+ petDescription + ", behaviour=" + behaviour + ", image=" + image + ", user=" + user + "]";
	}
	
}
