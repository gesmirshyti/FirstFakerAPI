import express from 'express';
import faker from 'faker';

const app = express();
const port = 8000;

const generateUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.random.uuid(),
    };
    return user;
};

app.get("/api/user/new", (req, res) => {
    const user = generateUser(); 
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = {
        _id: faker.random.uuid(),
        name: faker.company.companyName(),
        address: faker.address.secondaryAddress(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    };
    res.json(company); 
});

app.get("/api/user/company", (req, res) => {
    const comp = {
        company: {
            _id: faker.random.uuid(),
            name: faker.company.companyName(),
            address: faker.address.secondaryAddress(),
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
        user: generateUser(),
    };

    res.json(comp);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
