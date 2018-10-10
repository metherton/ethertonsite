package com.martinetherton;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by martin on 09/07/18.
 */
@RestController
public class RouteAdviceController {


   // @RequestMapping("/users")
    @RequestMapping(value="/api/routeAdvices", method= RequestMethod.GET)
    @ResponseBody
    public Iterable<Object> getUsers() {
//        List<User> users = new ArrayList<>();
        try {
  //          userDao.findAll().forEach(e -> users.add(e));
   //         return users;
            return null;
        }
        catch (Exception ex) {
     //       return users;
            return null;
        }
    }



}
