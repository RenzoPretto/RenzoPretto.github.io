package model

type Location struct {
	PlusCode string `json:"plusCode" gorm:"primary_key"`
	Address  string `json:"address"`
	Title    string `json:"title"`
}
