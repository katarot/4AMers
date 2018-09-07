package com.rev.beans;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="Service_Requests")
public class ServiceRequests {

	@Id
	@Column(name="SERVICE_REQUESTS_ID")
	@SequenceGenerator(name="SERVICE_REQUESTS_SEQ_GEN", sequenceName="SERVICE_REQUESTS_SQ", allocationSize=1)
	@GeneratedValue(generator="SERVICE_REQUESTS_SEQ_GEN", strategy=GenerationType.SEQUENCE)
	private int reqId;
	private Timestamp date;
	private int petId;
	private String status;
	private int sitterId;
	private String description;
	private String posterMsg;
	
	public ServiceRequests() {}

	public ServiceRequests(int reqId, Timestamp date, int petId, String status, int sitterId, String description,
			String posterMsg) {
		super();
		this.reqId = reqId;
		this.date = date;
		this.petId = petId;
		this.status = status;
		this.sitterId = sitterId;
		this.description = description;
		this.posterMsg = posterMsg;
	}

	public int getReqId() {
		return reqId;
	}

	public void setReqId(int reqId) {
		this.reqId = reqId;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int petId) {
		this.petId = petId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getSitterId() {
		return sitterId;
	}

	public void setSitterId(int sitterId) {
		this.sitterId = sitterId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPosterMsg() {
		return posterMsg;
	}

	public void setPosterMsg(String posterMsg) {
		this.posterMsg = posterMsg;
	}

	@Override
	public String toString() {
		return "ServiceRequests [reqId=" + reqId + ", date=" + date + ", petId=" + petId + ", status=" + status
				+ ", sitterId=" + sitterId + ", description=" + description + ", posterMsg=" + posterMsg + "]";
	}
	
	
	
}
