package com.example.controllers;

import com.example.entities.User;
import com.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
@ResponseBody
@RequestMapping("/home")
public class HomeController {
    private final UserRepository mUserRepository;

    @Autowired
    public HomeController(UserRepository userRepository) {
        mUserRepository = userRepository;
    }

    @RequestMapping("/index")
    public String index() {
        return "Hello, world!";
    }

    @RequestMapping("/create")
    public String create() {
        User user = new User();
        user.setUserName("a");
        user.setPassword("b");
        user.setSalt("s");
        user.setName("");
        user.setCreateUser(0L);
        user.setCreateTime(new Date());
        user.setLastModifyUser(0L);
        user = mUserRepository.save(user);

        return "id: " + user.getId();
    }

    @RequestMapping(value = "/query", method = RequestMethod.GET)
    public String query(@RequestParam(value = "name", required = true) String name) {
        User user = mUserRepository.findByUserName(name);
        if (user == null)
            return "not found!";

        return "id: " + user.getId();
    }
}
