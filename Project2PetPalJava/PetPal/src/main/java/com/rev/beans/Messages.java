package com.rev.beans;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="MESSAGES")
public class Messages {
	
	@Id
	@Column(name="MESSAGES_ID")
	@SequenceGenerator(name="MESSAGES_SEQ_GEN", sequenceName="MESSAGES_SQ", allocationSize=1)
	@GeneratedValue(generator="MESSAGES_SEQ_GEN", strategy=GenerationType.SEQUENCE)
	private int msgId;
	
	@Column(nullable=false)
	private int sender;
	 
	@Column(nullable=false)
	private int receiver;
	
	private String subject;
	private String message;
	private Timestamp dateSent;
	
	public Messages() {}

	public Messages(int msgId, int sender, int receiver, String subject, String message, Timestamp dateSent) {
		super();
		this.msgId = msgId;
		this.sender = sender;
		this.receiver = receiver;
		this.subject = subject;
		this.message = message;
		this.dateSent = dateSent;
	}

	public int getMsgId() {
		return msgId;
	}

	public void setMsgId(int msgId) {
		this.msgId = msgId;
	}

	public int getSender() {
		return sender;
	}

	public void setSender(int sender) {
		this.sender = sender;
	}

	public int getReceiver() {
		return receiver;
	}

	public void setReceiver(int receiver) {
		this.receiver = receiver;
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

	public Timestamp getDateSent() {
		return dateSent;
	}

	public void setDateSent(Timestamp dateSent) {
		this.dateSent = dateSent;
	}

	@Override
	public String toString() {
		return "Messages [msgId=" + msgId + ", sender=" + sender + ", receiver=" + receiver + ", subject=" + subject
				+ ", message=" + message + ", dateSent=" + dateSent + "]";
	}
  
	

}
