package com.example.Wedfest.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Catalog")
public class Catalog {
	private int catalogID;
	public int getCatalogID() {
		return catalogID;
	}
	public void setCatalogID(int catalogID) {
		this.catalogID = catalogID;
	}
	public int getVendorID() {
		return vendorID;
	}
	public void setVendorID(int vendorID) {
		this.vendorID = vendorID;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	private int vendorID;
	private String description;
	private String title;
	
}
