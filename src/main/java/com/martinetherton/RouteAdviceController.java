package com.martinetherton;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by martin on 09/07/18.
 */
@Controller
public class RouteAdviceController {


   // @RequestMapping("/users")
    @RequestMapping(value="/routeAdvices", method= RequestMethod.GET)
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
