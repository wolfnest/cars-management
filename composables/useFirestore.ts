import { collection, addDoc, getFirestore } from "firebase/firestore";

export const useFirestore = () => {
  const { $firebase } = useNuxtApp();
  const db = getFirestore($firebase);

  const addRandomCar = async () => {
    const carMakes = [
      "Toyota",
      "Honda",
      "Ford",
      "BMW",
      "Mercedes",
      "Audi",
      "Tesla",
    ];
    const carModels = ["Sedan", "SUV", "Hatchback", "Coupe", "Truck"];
    const colors = ["Red", "Blue", "Black", "White", "Silver", "Gray"];

    const randomCar = {
      make: carMakes[Math.floor(Math.random() * carMakes.length)],
      model: carModels[Math.floor(Math.random() * carModels.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      year: Math.floor(Math.random() * (2024 - 2010) + 2010),
      price: Math.floor(Math.random() * (50000 - 20000) + 20000),
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "testcar"), randomCar);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error adding car:", error);
      return { success: false, error };
    }
  };

  return {
    addRandomCar,
  };
};
