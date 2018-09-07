package com.rev.beans;

import java.sql.Timestamp;

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
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="PP_USERS")
public class Users {

	@Id
	@Column(name="PP_USERS_ID")
	@SequenceGenerator(name="PP_USERS_SEQ_GEN", sequenceName="PP_USERS_SQ", allocationSize=1)
	@GeneratedValue(generator="PP_USERS_SEQ_GEN", strategy=GenerationType.SEQUENCE)
	private int userId;
	

	@Column(nullable=false, unique=true)
	private String username;
	
	@Size(min=5, message="Password must be at least 5 characters long")
	@Column(nullable=false)
	private String password;
	
	@Column(nullable=false)
	private String firstName;
	
	@Column(nullable=false)
	private String lastName;
	
	@Email
	private String Email;
	private Timestamp dataRegistered;
	private String bio;
	
	@OneToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="j")
	private Pets pet;
	
	public Users () {}

	public Users(int userId, String username, String password, String firstName, String lastName, String email,
			Timestamp dataRegistered, String bio) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		Email = email;
		this.dataRegistered = dataRegistered;
		this.bio = bio;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public Timestamp getDataRegistered() {
		return dataRegistered;
	}

	public void setDataRegistered(Timestamp dataRegistered) {
		this.dataRegistered = dataRegistered;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", username=" + username + ", password=" + password + ", firstName="
				+ firstName + ", lastName=" + lastName + ", Email=" + Email + ", dataRegistered=" + dataRegistered
				+ ", bio=" + bio + "]";
	}
	
	
	
	
}
