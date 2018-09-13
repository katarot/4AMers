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
@Table(name="MESSAGES")
public class Message {
	
	@Id
	@Column(name="MESSAGE_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="message")
	@SequenceGenerator(name="message", sequenceName="ps_message_seq", allocationSize=1)
	private int id;
	
	@Column(nullable=false)
	private String subject;
	
	@Column(nullable=false)
	private String message;
	
	@Column(nullable=false)
	@Temporal(TemporalType.DATE)
	private Date dateSent;	// date... ?
	
	// The messages table in the last ER version has
	// two columns that should not be in there; author and message_from_poster
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="SENDER")
	private User sender;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="RECEIVER")
	private User receiver;

	public Message() {}
	
	public Message(int id, String subject, String message, Date dateSent, User sender, User receiver) {
		super();
		this.id = id;
		this.subject = subject;
		this.message = message;
		this.dateSent = dateSent;
		this.sender = sender;
		this.receiver = receiver;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getDateSent() {
		return dateSent;
	}

	public void setDateSent(Date dateSent) {
		this.dateSent = dateSent;
	}

	public User getSender() {
		return sender;
	}

	public void setSender(User sender) {
		this.sender = sender;
	}

	public User getReceiver() {
		return receiver;
	}

	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}

	@Override
	public String toString() {
		// Will dateSent Data datatype give errors if I don't use a .toString() to it?
		return "Message [id=" + id + ", subject=" + subject + ", message=" + message + ", dateSent=" + dateSent
				+ ", sender=" + sender + ", receiver=" + receiver + "]";
	}
	
}
