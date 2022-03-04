package model

import "github.com/jinzhu/gorm"

type Company struct {
	gorm.Model
	Name      string `json:"name"`
	Domain    string `json:"domain"`
	Locations []Location
}
