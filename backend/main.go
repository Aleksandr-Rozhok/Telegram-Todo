package main

import (
	"backend/routes"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	router := mux.NewRouter()
	routes.RegisterRoutes(router)
	log.Fatal(http.ListenAndServe(":8000", router))
}
