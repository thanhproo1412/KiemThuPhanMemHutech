/// <reference types="cypress" />

describe('JSONPlaceholder API Test', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  it('GET /todos/1 - should return a todo item', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/todos/1`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('userId')
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('completed')
    })
  })

  it('POST /todos - should create a new todo', () => {
    const newTodo = {
      userId: 1,
      title: 'Learn Cypress API testing',
      completed: false
    }

    cy.request({
      method: 'POST',
      url: `${baseUrl}/todos`,
      body: newTodo
    }).then((response) => {
      expect(response.status).to.eq(201) // JSONPlaceholder trả 201 khi tạo thành công
      expect(response.body).to.include(newTodo)
      expect(response.body).to.have.property('id')
    })
  })

  it('PUT /todos/1 - should update a todo', () => {
    const updatedTodo = {
      userId: 1,
      title: 'Updated title',
      completed: true
    }

    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      body: updatedTodo
    }).then((response) => {
      expect(response.status).to.eq(200)

      expect(response.body).to.have.property('title', updatedTodo.title)
      expect(response.body).to.have.property('completed', updatedTodo.completed)
      expect(response.body).to.have.property('userId', updatedTodo.userId)
    })
  })

  it('DELETE /todos/1 - should delete a todo', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/todos/1`
    }).then((response) => {
      expect(response.status).to.eq(200) // JSONPlaceholder trả 200 OK
    })
  })
})
