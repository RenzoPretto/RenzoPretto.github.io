package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"wepool.com/src/model"
)

func CreateLocation(c *gin.Context) {
	// Validate input
	var location model.Location
	if err := c.ShouldBindJSON(&location); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create location
	model.DB.Create(&location)

	c.JSON(http.StatusOK, gin.H{"data": location})
}
