package com.example.Wedfest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Wedfest.model.Vendor;

public interface VendorRepository extends MongoRepository <Vendor,Integer>{

}
