package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.servlet.ServletException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
@Service
public class UserServiceImpl implements UserService {

    private List<User> users = new ArrayList<>();


    @Autowired
    public UserServiceImpl()
    {
    }

    @PostConstruct
    private void populateSampleData()
    {
        users.add( new User("AndresPerez", "test@mail.com", "password", "Andres", "Perez" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBvCAXVAoaAU0yumoH1AJSLCJgFsAvghegU0U4wpBEIOdxRUVRA"));
        users.add( new User("xyz", "xyz@mail.com", "password", "xyz", "xyz" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyWgcCC6Mb5O4on4EfW-nK9EZH6nf7JskL10C9qeoE6_wkz5-"));
    }


    @Override
    public List<User> getUsers()
    {
        return users;
    }

    @Override
    public User getUser( String username )
    {
        User localUser = null;
        for (int i =0;i<users.size() ;i++){
            if(users.get(i).getUsername().equals(username)){
                localUser=users.get(i);
            }
        }
        return localUser;
    }

    @Override
    public User createUser( User user ) throws ServletException
    {
        if(registredUser(user.getUsername())){
            throw new ServletException("The username is not available");
        }
        users.add(user);
        return user;
    }

    private boolean registredUser(String username) {
        boolean isRegistred = false;
        for (int i =0;i<users.size() && !isRegistred ;i++){
            isRegistred=users.get(i).getUsername().equals(username);
        }
        return isRegistred;
    }

    @Override
    public User findUserByEmail( String email ) throws ServletException
    {
        User localUser=null;

        for (int i =0;i<users.size();i++){

            if(users.get(i).getEmail().equals(email)){
                localUser=users.get(i);
            }
        }
        if (localUser==null)throw new ServletException ("There is no email related to this user");
        return localUser;
    }

    @Override
    public User findUserByEmailAndPassword( String email, String password )
    {
        return users.get( 0 );
    }


}
