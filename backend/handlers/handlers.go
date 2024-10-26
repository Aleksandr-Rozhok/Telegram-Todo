package handlers

import (
	"backend/models"
	"encoding/json"
	"net/http"
	"sync"
)

var todos = []models.Todo{}
var mu sync.Mutex

func GetTodos(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(todos)
}

func CreateTodo(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()
	var todo models.Todo
	json.NewDecoder(r.Body).Decode(&todo)
	todos = append(todos, todo)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(todo)
}
