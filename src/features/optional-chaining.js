const optChaining = () => {
  const students = [{
    name: 'Abhisek',
    age: 28,
    address: {
      country: 'India'
    }
  }, {
    name: 'Dillip',
  }]

  console.log('Optional Chaining:')
  students.forEach(student => {
    console.log('Student Name:', student?.name)
    console.log('Student Age:', student?.age)
    console.log('Student Country:', student?.address?.country)
  })
}

export default optChaining
