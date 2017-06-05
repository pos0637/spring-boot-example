package com.example.entities;

import javax.persistence.*;

/**
 * 用户与角色
 */
@Entity
@Table(name = "t_sys_user_role")
public class UserRole {
    /**
     * 索引
     */
    @Id
    @GeneratedValue
    @Column(unique = true, nullable = false)
    private Long id;

    /**
     * 用户索引
     */
    @Column(nullable = false)
    private Long userId;

    /**
     * 角色索引
     */
    @Column(nullable = false)
    private Long roleId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }
}
