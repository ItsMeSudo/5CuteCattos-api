package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
)

type CatData struct {
	Catto string `json:"catto"`
}
type CatDatas []CatData

var arr [5]string = [5]string{"https://i.imgur.com/BEjAPLj.jpeg", "https://i.imgur.com/pLXZxab.jpeg", "https://i.imgur.com/5XIjVFj.jpeg", "https://i.imgur.com/J0UJ635.jpeg", "https://i.imgur.com/2nYZYRj.jpeg"}

func main() {
	handleRequest()
}

func SendCat(w http.ResponseWriter, r *http.Request) {
	pushresp := CatDatas{
		CatData{Catto: arr[rand.Intn(5-0)+0]},
	}
	json.NewEncoder(w).Encode(pushresp)
}

func handleRequest() {
	http.HandleFunc("/", SendCat)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
