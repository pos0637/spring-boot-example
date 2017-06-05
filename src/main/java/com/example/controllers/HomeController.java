package com.example.controllers;

import com.example.entities.User;
import com.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private UserRepository mUserRepository;

    @RequestMapping("/index")
    public String index() {
        return "Hello, world!";
    }

    @RequestMapping("/create")
    public String create() {
        User user = new User();
        user.setName("a");
        user.setPassword("b");
        user = mUserRepository.save(user);

        return "id: " + user.getId();
    }
}
