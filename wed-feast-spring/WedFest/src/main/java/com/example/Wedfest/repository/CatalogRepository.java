package com.example.Wedfest.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Wedfest.model.Catalog;

public interface CatalogRepository extends MongoRepository <Catalog,Integer> {

}
