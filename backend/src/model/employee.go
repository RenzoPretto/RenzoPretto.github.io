package model

import "github.com/jinzhu/gorm"

type Employee struct {	
	gorm.Model
	WorkEmail     string `json:"workEmail" gorm:"unique_index"`
	Password      string `json:"password"`
	PreferencesID uint   `json:"preferencesID"`
	CarpoolGroupID uint `json:"carpoolGroupId"`
	CarpoolGroup CarpoolGroup `json:"carpoolGroup,omitempty"`
	Homelocation Homelocation `json:"homelocation,omitempty"`
	HomelocationID uint `json:"homelocationID"`
	Profile Profile `json:"profile,omitempty"`
	ProfileID uint `json:"profileID"`
}

