package com.example.Wedfest.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="businessName")
public class BusinessName {
	private int businessCategoryID;
	private String businessCategoryName;
	public int getBusinessCategoryID() {
		return businessCategoryID;
	}
	public void setBusinessCategoryID(int businessCategoryID) {
		this.businessCategoryID = businessCategoryID;
	}
	public String getBusinessCategoryName() {
		return businessCategoryName;
	}
	public void setBusinessCategoryName(String businessCategoryName) {
		this.businessCategoryName = businessCategoryName;
	}
}
