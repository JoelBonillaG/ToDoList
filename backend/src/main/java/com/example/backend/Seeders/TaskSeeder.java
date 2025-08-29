package com.example.backend.Seeders;

import com.example.backend.Entities.Task;
import com.example.backend.Repositories.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class TaskSeeder {

    @Bean
    CommandLineRunner init(TaskRepository repository) {

        return args -> {

            if (repository.count() == 0) {
                Task task1 = new Task(
                        "Tarea 1",
                        false
                );

                Task task2 = new Task(
                        "Tarea 2",
                        true
                );

                repository.saveAll(
                        List.of(task1, task2)
                );
            }
        };


    }
}
