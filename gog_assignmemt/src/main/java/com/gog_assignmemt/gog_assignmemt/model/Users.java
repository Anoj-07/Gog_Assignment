package com.gog_assignmemt.gog_assignmemt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long userId;
    public String UserName;
    public String Email;
    public Long Number;
    public String Password;
}
