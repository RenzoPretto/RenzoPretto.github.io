# model
--
    import "."


## Usage

```go
var DB *gorm.DB
```

#### func  ConnectDatabase

```go
func ConnectDatabase()
```

#### type Company

```go
type Company struct {
	gorm.Model
	Name      string `json:"name"`
	Domain    string `json:"domain"`
	Locations []Location
}
```


#### type Employee

```go
type Employee struct {
	gorm.Model
	WorkEmail string `json:"workEmail" gorm:"unique_index"`
	Password  string `json:"password"`
}
```


#### type Location

```go
type Location struct {
	PlusCode string `json:"plusCode" gorm:"primary_key"`
	Address  string `json:"address"`
	Title    string `json:"title"`
}
```


#### type Session

```go
type Session struct {
	gorm.Model
	EmployeeID int
	Employee   Employee
}
```

A representation of an active connection. A logged in user creates a session
token that they can use as an authentication token. A session belongs to a user
account and can perform actions on their behalf.
