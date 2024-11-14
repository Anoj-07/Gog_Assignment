package com.gog_assignmemt.gog_assignmemt.Repo;

import com.gog_assignmemt.gog_assignmemt.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepo extends JpaRepository<Long, Users> {
}
