# Welcome!
This sample Full Stack React + Spring Boot application showcases a simple data visualization (Iris dataset with the Scatterplots by Recharts and D3) and CRUD operations to a backend database.

# To get started
1. Clone the repository
2. Install any dependencies with `gradle build`
3. Then run the Spring Boot application with `gradle bootRun`

# Once the server is running
Navigate to localhost:8080 to view the frontend React UI. 

The Home route `/` showcases the Iris dataset (stored in /resources as `iris.data`) provided to the frontend with `api/iris`. This is then passed to Recharts and D3 to populate simple scatterplots to visualize the dataset. 

Furthermore, Users route `/users` (available in the Navbar) offers the ability to create, read, and delete Users. This provides an example of routing and the use of shared components and separation of logic.

The demonstration below conveniently showcases the functionality of the application:

https://github.com/user-attachments/assets/d7683557-de52-43ef-a655-e28d652ce540

# Additionally
Feel free to explore the codebase and test the following REST endpoints:
- `curl http://localhost:8080/api/iris`
- `curl http://localhost:8080/api/iris/species`
- `curl http://localhost:8080/api/iris/average-sepal-length/Iris-setosa`
- `curl -X POST http://localhost:8080/api/users -H "Content-Type: application/json" -d '{"username":"john","email":"john@example.com"}'`
- `curl http://localhost:8080/api/users `
- `curl -X DELETE http://localhost:8080/api/users/1`

# Next Steps

To take this application to the next level:
- Deploy in the cloud
- User Login, Authentication, and Roles
- Expand the dataset and offer different data visualizations for interaction

Best!
