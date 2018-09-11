package com.rev.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Pets")
public class Pet {
	
	@Id
	@Column(name="Pet_ID")
	@SequenceGenerator(name="Pet_SEQ_GEN", sequenceName="Pet_SQ", allocationSize=1)
	@GeneratedValue(generator="Pet_SEQ_GEN", strategy=GenerationType.SEQUENCE)
	private int petId;
	
	@Column(nullable=false)
	private String petName;
	
	@Column(nullable=false)
	private int userId;
	
	private String breed;
	
	private String needs;
	
	private String description;
	
	private String behavior;
	
	
	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PET_PICTURES")
	private Pictures pic;
	
	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PET_SERVICE_REQUESTS")
	private ServiceRequests requests;
	
	
	
	public Pet() {}
	
	public Pet(int petId, String petName, int userId, String breed, String needs, String description,
			String behavior) {
		super();
		this.petId = petId;
		this.petName = petName;
		this.userId = userId;
		this.breed = breed;
		this.needs = needs;
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
		return "Pet [petId=" + petId + ", petName=" + petName + ", userId=" + userId + ", breed=" + breed + ", needs="
				+ needs + ", description=" + description + ", behavior=" + behavior + "]";
	}
	
	
}
