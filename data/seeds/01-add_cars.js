exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "44570789564512990",
          make: "Toyota",
          model: "Corolla",
          mileage: 75000,
          transmission: "Automatic",
          clean_title: true,
        },
        {
          vin: "54056556529460773",
          make: "Volkswagen",
          model: "Jetta",
          mileage: 50000,
          transmission: "Manual",
          clean_title: true,
        },
        {
          vin: "87158998272718969",
          make: "Tesla",
          model: "Model S",
          mileage: 25000,
          transmission: "Automatic",
          clean_title: true,
        },
      ]);
    });
};
