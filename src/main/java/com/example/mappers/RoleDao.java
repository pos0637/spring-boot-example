package com.example.mappers;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import com.example.entities.Role;

@Mapper
public interface RoleDao {
    int insert(@Param("pojo") Role pojo);

    int insertSelective(@Param("pojo") Role pojo);

    int insertList(@Param("pojos") List<Role> pojo);

    int update(@Param("pojo") Role pojo);
}
