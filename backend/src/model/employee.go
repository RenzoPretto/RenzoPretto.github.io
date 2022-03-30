package model

import "github.com/jinzhu/gorm"

type Employee struct {
	gorm.Model
	WorkEmail     string `json:"workEmail" gorm:"unique_index"`
	Password      string `json:"password"`
	PreferencesID uint   `json:"preferencesID"`
}
