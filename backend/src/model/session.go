package model

import "github.com/jinzhu/gorm"

/*
A representation of an active connection. A logged in user creates a session token
that they can use as an authentication token.
A session belongs to a user account and can perform actions on their behalf.
*/
type Session struct {
	gorm.Model
	EmployeeID int
	Employee   Employee
}
