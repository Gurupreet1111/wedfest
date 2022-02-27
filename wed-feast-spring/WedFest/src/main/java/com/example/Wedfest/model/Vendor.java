package com.example.Wedfest.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Vendor")
public class Vendor {
	private int vendorID;
	private long whatsAppNo;
	private String businessName;
	private String businesscategoryID;
	private long alternateContactNo;
	private String emailAddress;
	private String city;
	private String streetAddress;
	private int pincode;
	private String streetAddress2;
	private String addTheAreaYouServe;
	public int getVendorID() {
		return vendorID;
	}
	public void setVendorID(int vendorID) {
		this.vendorID = vendorID;
	}
	public long getWhatsAppNo() {
		return whatsAppNo;
	}
	public void setWhatsAppNo(long whatsAppNo) {
		this.whatsAppNo = whatsAppNo;
	}
	public String getBusinessName() {
		return businessName;
	}
	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}
	public String getBusinesscategoryID() {
		return businesscategoryID;
	}
	public void setBusinesscategoryID(String businesscategoryID) {
		this.businesscategoryID = businesscategoryID;
	}
	public long getAlternateContactNo() {
		return alternateContactNo;
	}
	public void setAlternateContactNo(long alternateContactNo) {
		this.alternateContactNo = alternateContactNo;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getStreetAddress() {
		return streetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getStreetAddress2() {
		return streetAddress2;
	}
	public void setStreetAddress2(String streetAddress2) {
		this.streetAddress2 = streetAddress2;
	}
	public String getAddTheAreaYouServe() {
		return addTheAreaYouServe;
	}
	public void setAddTheAreaYouServe(String addTheAreaYouServe) {
		this.addTheAreaYouServe = addTheAreaYouServe;
	}
	
}
