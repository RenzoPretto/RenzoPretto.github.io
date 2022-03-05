package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"wepool.com/src/controller"
	"wepool.com/src/model"
)

func main() {
	router := gin.Default()
	log.Println("******Listening for requests at http://localhost:8000/******")
	model.ConnectDatabase()
	log.Println("******Connected to DB!******")
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": "Welcome to WePool!"})
	})
	// router.GET("/employee", controller.FindEmployeesInCompany)
	router.POST("/signup", controller.UserSignup)
	router.POST("/login", controller.UserLogin)
	router.POST("/login-session", controller.Login)
	router.POST("/logout", controller.Logout)
	
	err := router.Run(":8000")
	if err != nil {
		panic(err)
	}
}
