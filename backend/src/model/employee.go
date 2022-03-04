package model

import "github.com/jinzhu/gorm"

type Employee struct {
	gorm.Model
	WorkEmail string `json:"workEmail"`
	Password  string `json:"password"`
}
