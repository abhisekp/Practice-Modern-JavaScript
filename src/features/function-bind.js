const fnBind = () => {
  const student1 = {
    name: 'Abhisek',
    getName() {
      return this.name;
    },
  };

  const student2 = {
    name: 'Amar',
  };

  const { getName } = student1;

  console.log('Non Function Bind:', student1.getName());
  console.log('Function Bind:', student1::getName());
  console.log('Function Bind:', student2::getName());
};

export default fnBind;
