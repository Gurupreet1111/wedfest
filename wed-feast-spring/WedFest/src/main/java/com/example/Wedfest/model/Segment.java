package com.example.Wedfest.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Segment")
public class Segment {
	private int segmentID;
	private String segmentName;
	private int businessCategoryID;
	public int getSegmentID() {
		return segmentID;
	}
	public void setSegmentID(int segmentID) {
		this.segmentID = segmentID;
	}
	public String getSegmentName() {
		return segmentName;
	}
	public void setSegmentName(String segmentName) {
		this.segmentName = segmentName;
	}
	public int getBusinessCategoryID() {
		return businessCategoryID;
	}
	public void setBusinessCategoryID(int businessCategoryID) {
		this.businessCategoryID = businessCategoryID;
	}
	
}
