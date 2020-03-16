import faker from "faker";

faker.seed(444);

const userFake = index => {
  return {
    id: 1 + index,
    name: faker.name.findName(),
    date: faker.date.between("1970-01-01", "2000-01-01"),
    country: faker.address.country(),
    city: faker.address.city(),
    email: faker.internet.email(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude()
  };
};

export default Array.apply(null, Array(111)).map((elem, index) =>
  userFake(index)
);
