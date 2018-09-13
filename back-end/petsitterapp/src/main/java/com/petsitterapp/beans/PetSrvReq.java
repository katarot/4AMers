package com.petsitterapp.beans;

import java.util.Date;

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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="SERVICE_REQUESTS")
public class PetSrvReq {

	@Id
	@Column(name="SRV_REQ_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="srv_req")
	@SequenceGenerator(name="srv_req", sequenceName="ps_srvreq_seq", allocationSize=1)
	private int id;
	
//	@Column(nullable=false) //it was, and is supposed to be nullable=false
//	@Column
	@Temporal(TemporalType.DATE)
	private Date dateCreated;	// date...?
	
	@Column(nullable=false)
	private String status;
	
	private String description;
	private String replyMessage;	// Optional message written by the offerer (person who wants to pet sit) before sending the  offer
	
	// Is this an ok relation?
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="PET_ID")
	private Pet pet;		// Pet to be sitted
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="USER_ID")
	private User sitter;	// Person to do the pet sitting

	public PetSrvReq() {}
	
	public PetSrvReq(int id, Date dateCreated, String status, String description, String replyMessage, Pet pet,
			User sitter) {
		super();
		this.id = id;
		this.dateCreated = dateCreated;
		this.status = status;
		this.description = description;
		this.replyMessage = replyMessage;
		this.pet = pet;
		this.sitter = sitter;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return dateCreated;
	}

	public void setDate(Date date) {
		this.dateCreated = date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getReplyMessage() {
		return replyMessage;
	}

	public void setReplyMessage(String replyMessage) {
		this.replyMessage = replyMessage;
	}

	public Pet getPet() {
		return pet;
	}

	public void setPet(Pet pet) {
		this.pet = pet;
	}

	public User getSitter() {
		return sitter;
	}

	public void setSitter(User sitter) {
		this.sitter = sitter;
	}

	@Override
	public String toString() {
		return "ServiceRequest [id=" + id + ", date=" + dateCreated + ", status=" + status + ", description=" + description
				+ ", replyMessage=" + replyMessage + ", pet=" + pet + ", sitter=" + sitter + "]";
	}
	
}
