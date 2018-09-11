package com.petsitterapp.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="PS_USERS")
public class User {
	
	@Id
	@Column(name="USER_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user")
	@SequenceGenerator(name="user", sequenceName="ps_user_seq", allocationSize=1)
	private int id;
	
	@Column(unique=true, nullable=false)
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	
	@Column(unique=true, nullable=false)
	private String email;
	
	@Column(nullable=false)
	@Temporal(TemporalType.DATE)
	private Date dateRegistered;	// date... ?
	
	@Size(min=15, message="Bio must be at least 15 characters")
	private String bioDescription;

	public User() {}
	
	public User(int id, String username, String password, String firstName, String lastName, String email, Date dateRegistered,
			String bioDescription) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.dateRegistered = dateRegistered;
		this.bioDescription = bioDescription;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDateRegistered() {
		return dateRegistered;
	}

	public void setDateRegistered(Date dateRegistered) {
		this.dateRegistered = dateRegistered;
	}

	public String getBioDescription() {
		return bioDescription;
	}

	public void setBioDescription(String bioDescription) {
		this.bioDescription = bioDescription;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", dateRegistered=" + dateRegistered + ", bioDescription="
				+ bioDescription + "]";
	}
	
}
