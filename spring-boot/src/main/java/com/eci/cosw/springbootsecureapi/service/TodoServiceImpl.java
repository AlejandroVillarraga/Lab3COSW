package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class TodoServiceImpl implements TodoService {


    List<Todo> todosList = new ArrayList<>();

    @Override
    public List<Todo> getTodoList() {
        return todosList;
    }

    @Override
    public Todo addTodo(Todo todo) {
        todosList.add(todo);
        return todo;
    }
}
