package model

import "github.com/jinzhu/gorm"

type CarpoolGroup struct {
	gorm.Model
	Employees     []Employee `json:"employees"`
	CompanyID     uint       `json:"companyID"`
	Company       Company    `json:"company"`
	LocationID    Location   `json:"locationID"`
	PreferencesID uint       `json:"preferencesID"`
}
