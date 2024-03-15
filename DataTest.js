import { db } from "./firebase";
import {collection, addDoc, setDoc, getDocs, doc} from "firebase/firestore";


// Import Firebase SDK
import { db } from './firebase'; // Assuming firebase.js is in the same directory
import { collection, addDoc } from "firebase/firestore"; 

// Function to add locations collection and sample documents
async function addSampleDataToFirestore() {
  try {
    // Check if locations collection exists
    const locationsRef = collection(db, "locations");
    const querySnapshot = await locationsRef.get();
    
    if (querySnapshot.empty) {
      // If locations collection doesn't exist, create it and add sample documents

      // Sample documents
      const sampleSites = [
        {
          title: "Condo",
          location: "Los Angeles",
          description: "555 Barrington is a luxury, Mediterranean-style Brentwood apartment for rent offering residents all of the conveniences of home. All apartment units in the property offer beautiful floor plans designed for comfortable and spacious living with private balconies, nine-foot ceilings, Italian ceramic tile entries, full size washer and dryers, wet bars and wood burning fireplaces.",
          tags: ["Balcony", "Bedroom", "Pool", "Bathroom", "Garage"]
        },
        // Add more sample documents here
        {
          title: "Villa",
          location: "Miami",
          description: "Luxurious villa with ocean view",
          tags: ["Ocean View", "Pool", "Spa"]
        },
        {
          title: "Cabin",
          location: "Aspen",
          description: "Cozy cabin in the mountains",
          tags: ["Mountain View", "Skiing", "Fireplace"]
        },
        {
          title: "Beach House",
          location: "Malibu",
          description: "Stunning beachfront property",
          tags: ["Beachfront", "Sunset", "BBQ"]
        }
      ];

      // Add sample documents to Firestore
      sampleSites.forEach(async (site) => {
        try {
          const docRef = await addDoc(locationsRef, site);
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
    } else {
      console.log("Locations collection already exists, skipping sample data insertion.");
    }
  } catch (error) {
    console.error("Error checking for existing locations collection: ", error);
  }
}

// Call the function to add sample data when needed
addSampleDataToFirestore();
