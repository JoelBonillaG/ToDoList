package com.example.backend.Controllers;

import com.example.backend.Entities.Task;
import com.example.backend.Repositories.TaskRepository;
import com.example.backend.Services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/task")
public class TaskController {

private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getTasks() {

        return this.taskService.getAllTasks();

    }

    @PostMapping
    public void insertTask(@RequestBody Task task){

        this.taskService.addTask(task);

    }

    @DeleteMapping(path="taskId")
    public void deleteTask(@RequestBody Long id){
        this.taskService.deleteTask(id);
    }

    @PutMapping(path="{taskId}")
    public void updateTask(@PathVariable("studentId") Long id){

        this.taskService.updateTask(id);
    }
}
