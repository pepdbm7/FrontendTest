describe('business logic test', () => {

  describe('search user', () => {
    
      const query = 'pepdbm7'
      const wrongQuery = 'jasjkdañfjdslfjñsa'

      it('should retrieve a user info searching by name', () => 
          logic.getUser(query)
              .then(user => {
                  expect(user).toBeDefined()

                  expect(user.login).toBe(query)
                  expect(user.avatar_url).toBeDefined()
              })
      )

      it('should fail on trying to search a non existing user', () => 
          logic.getUser(wrongQuery)
              .catch(err => err)
              .then(({ message }) => {
                  expect(message).toBeDefined()

                  expect(message).toBe(`User ${wrongQuery} was not found`)
              })
      )

      it('should throw error on blank query', () => 
          logic.getUser('')
              .catch(err => err)
              .then(({ message }) => {
                  expect(message).toBeDefined()

                  expect(message).toBe('query is empty or blank')
              })
      )

      it('should throw error on blank query', () => 
          logic.getUser('   \t\n')
              .catch(err => err)
              .then(({ message }) => {
                  expect(message).toBeDefined()

                  expect(message).toBe('query is empty or blank')
              })
      )

      it('should fail on searching an undefined as a query', () => 
          logic.getUser(undefined)
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('undefined is not a string'))
      )

      it('should fail on searching an null as a query', () => 
          logic.getUser(null)
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('null is not a string'))
      )

      it('should fail on searching an array as a query', () => 
          logic.getUser([1,2])
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('1,2 is not a string'))
      )

      it('should fail on searching an object as a query', () => 
          logic.getUser({object: true})
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('[object Object] is not a string'))
      )

      it('should fail on searching an boolean as a query', () => 
          logic.getUser(true)
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('true is not a string'))
      )
      
  }),

  describe("show user's repositories", () => {

    const query = 'pepdbm7'
    const wrongQuery = 'jasjkdañfjdslfjñsa'

      it('should retrieve a user info searching by name', () => 
          logic.getRepositories(query)
              .then(repos => {
                  expect(repos).toBeDefined()

                  expect(repos[0].name).toBe('33-js-concepts')
                  expect(repos[1].name).toBe('FrontendTest')

                  expect(repos[0].stargazers_count).toBeDefined()
                  expect(repos[0].forks_count).toBeDefined()
              })
      )

      it('should fail on trying to search a non existing user', () => 
          logic.getRepositories(wrongQuery)
              .catch(err => err)
              .then(({ message }) => {
                  expect(message).toBeDefined()

                  expect(message).toBe('Not Found')
              })
      )

      it('should throw error on blank query', () => 
          logic.getRepositories('')
              .catch(err => err)
              .then(({ message }) => {
                  expect(message).toBeDefined()

                  expect(message).toBe('query is empty or blank')
              })
      )

      it('should throw error on blank query', () => 
      logic.getRepositories('    \t\n')
          .catch(err => err)
          .then(({ message }) => {
              expect(message).toBeDefined()

              expect(message).toBe('query is empty or blank')
          })
      )

      it('should fail on searching an undefined user', () => 
          logic.getRepositories(undefined)
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('undefined is not a string'))
      )

      it('should fail on searching an null as a query', () => 
          logic.getRepositories(null)
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('null is not a string'))
      )

      it('should fail on searching an array as a query', () => 
          logic.getRepositories([1,2])
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('1,2 is not a string'))
      )

      it('should fail on searching an object as a query', () => 
          logic.getRepositories({object: true})
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('[object Object] is not a string'))
      )

      it('should fail on searching an boolean as a query', () => 
          logic.getRepositories(true)
              .catch(err => err)
              .then(({ message }) => expect(message).toBe('true is not a string'))
      )

  })
})