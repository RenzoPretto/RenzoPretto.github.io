package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"wepool.com/src/model"
)

type CreateCompanyInput struct {
	Name   string `json:"name"`
	Domain string `json:"domain"`
}

func CreateCompany(c *gin.Context) {
	// Validate input
	var input CreateCompanyInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create location
	company := model.Company{Name: input.Name, Domain: input.Domain}
	model.DB.Create(&company)

	c.JSON(http.StatusOK, gin.H{"data": company})
}
