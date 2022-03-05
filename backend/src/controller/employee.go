package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"wepool.com/src/model"
)

type CreateEmployeeInput struct {
	WorkEmail string `json:"workEmail" binding:"required"`
	Password  string `json:"password" binding:"required"`
}

type ChangePasswordInput struct {
	WorkEmail   string `json:"workEmail" binding:"required"`
	OldPassword string `json:"oldPassword" binding:"required"`
	NewPassword string `json:"newPassword" binding:"required"`
}

type AuthenticationInput struct {
	SessionID int `json:"sessionID" binding:"required"`
}

/*
GET /employee
Get the employee info associated with a session.
May return OK, BadRequest, Unauthorized, or NotFound.
*/
func ReadEmployee(c *gin.Context) {
	// Validate input
	var auth AuthenticationInput
	if err := c.ShouldBindJSON(&auth); err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}
	var session model.Session
	result := model.DB.Find(&session, auth.SessionID)
	if result.Error != nil {
		c.JSON(http.StatusUnauthorized, result.Error)
		return
	}
	var employee model.Employee
	result = model.DB.Find(&employee, session.EmployeeID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, result.Error)
		return
	}
	c.JSON(http.StatusOK, employee)
}

/*
POST /employee
Create a new employee.
May return OK, BadRequest
*/
func UserSignup(c *gin.Context) {
	// Validate input
	var input CreateEmployeeInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}

	// Create employee
	// TODO: Hash the password
	employee := model.Employee{WorkEmail: input.WorkEmail, Password: input.Password}
	model.DB.Create(&employee)

	c.JSON(http.StatusOK, employee)
}

/*
POST /login
Given an employee and a password, attempt to create a new session and provide
a session key for authentication.
May return OK, BadRequest, Unauthorized
*/
func Login(c *gin.Context) {
	var input CreateEmployeeInput
	err := c.ShouldBindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}
	// Username or password is incorrect.
	var employee model.Employee
	result := model.DB.Where("work_email = ?", input.WorkEmail).First(&employee)
	if result.Error != nil {
		c.JSON(http.StatusUnauthorized, "")
		return
	} else if employee.Password != input.Password {
		c.JSON(http.StatusUnauthorized, "")
		return
	} else {
		var session model.Session
		model.DB.Where("employee_id = ?", employee.ID).FirstOrCreate(&session)
		c.JSON(http.StatusOK, session.ID)
	}
}

/*
POST /logout
Given a session id, attempt to logout that session.
Deletes session from database if it exists, then returns an http status.
May return OK, BadRequest
*/
func Logout(c *gin.Context) {
	var auth AuthenticationInput
	err := c.ShouldBindJSON(&auth)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}
	var session model.Session
	result := model.DB.First(&session, auth.SessionID)
	if result.Error == nil {
		model.DB.Delete(&session)
	}
	c.JSON(http.StatusOK, "")
}

func UserLogin(c *gin.Context) {
	var employee model.Employee
	var input CreateEmployeeInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	if err := model.DB.Where("work_email = ? AND password=?", input.WorkEmail, input.Password).First(&employee).Error; err != nil {
		c.JSON(401, gin.H{"error": "Invalid email or password"})
		return
	}	

	c.JSON(http.StatusOK, gin.H{"data": employee})
}
