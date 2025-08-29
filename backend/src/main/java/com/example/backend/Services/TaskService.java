package com.example.backend.Services;

import com.example.backend.Entities.Task;
import com.example.backend.Repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public void addTask(Task task) {

        this.repository.save(task);

    }

    public List<Task> getAllTasks() {

        return this.repository.findAll();

    }

    public void deleteTask(Long id) {

        this.repository.findById(id).orElseThrow(() -> new IllegalStateException("Tarea no encontrada"));
        this.repository.deleteById(id);

    }

    public void updateTask(Long id) {

        Task auxTask = this.repository.findById(id).orElseThrow(() -> new IllegalStateException("Tarea no encontrada"));

        auxTask.setCompleted(!auxTask.isCompleted());

        this.repository.save(auxTask);
    }

}
